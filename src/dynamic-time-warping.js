export default class DynamicTimeWarping {
    constructor(ts1, ts2, distanceFunction) {
        this.ser1 = ts1;
        this.ser2 = ts2;
        this.distFunc = distanceFunction;
        this.distance = null;
        this.matrix = null;
        this.path = null;
    }

    getDistance() {
        if (this.distance !== null) {
            return this.distance;
        }
        this.matrix = [];
        for (var i = 0; i < this.ser1.length; i++) {
            this.matrix[i] = [];
            for (var j = 0; j < this.ser2.length; j++) {
                var cost = Infinity;
                if (i > 0) {
                    cost = Math.min(cost, this.matrix[i - 1][j]);
                    if (j > 0) {
                        cost = Math.min(cost, this.matrix[i - 1][j - 1]);
                        cost = Math.min(cost, this.matrix[i][j - 1]);
                    }
                } else {
                    if (j > 0) {
                        cost = Math.min(cost, this.matrix[i][j - 1]);
                    } else {
                        cost = 0;
                    }
                }
                this.matrix[i][j] = cost + this.distFunc(this.ser1[i], this.ser2[j]);
            }
        }
        this.distance = this.matrix[this.ser1.length - 1][this.ser2.length - 1];
        return this.distance;
    }

    getPath() {
        if (this.path !== null) {
            return this.path;
        }
        if (this.matrix === null) {
            this.getDistance();
        }
        var i = this.ser1.length - 1;
        var j = this.ser2.length - 1;
        this.path = [[i, j]];
        while (i > 0 || j > 0) {
            if (i > 0) {
                if (j > 0) {
                    if (this.matrix[i - 1][j] < this.matrix[i - 1][j - 1]) {
                        if (this.matrix[i - 1][j] < this.matrix[i][j - 1]) {
                            this.path.push([i - 1, j]);
                            i--;
                        } else {
                            this.path.push([i, j - 1]);
                            j--;
                        }
                    } else {
                        if (this.matrix[i - 1][j - 1] < this.matrix[i][j - 1]) {
                            this.path.push([i - 1, j - 1]);
                            i--;
                            j--;
                        } else {
                            this.path.push([i, j - 1]);
                            j--;
                        }
                    }
                } else {
                    this.path.push([i - 1, j]);
                    i--;
                }
            } else {
                this.path.push([i, j - 1]);
                j--;
            }
        }
        this.path = this.path.reverse();
        return this.path;
    }
}
