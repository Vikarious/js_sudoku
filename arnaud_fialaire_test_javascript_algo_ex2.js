function F21(A) {
    for (var i = 0; i < A.length; i++) {
        if (isNaN(A[i]) || A[i] < 1 || A[i] > 9 || A.indexOf(A[i]) !== A.lastIndexOf(A[i]) || A.length != 9) {
            return false;
        }
    }
    return true;
}