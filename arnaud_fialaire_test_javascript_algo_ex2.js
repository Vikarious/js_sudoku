let not_a_number = isNaN(A[i]);
let out_of_range = A[i] < 1 || A[i] > 9;
let not_unique = A.indexOf(A[i]) !== A.lastIndexOf(A[i]);
let incorrect_length = A.length != 9;

function F21(A) {
    for (var i = 0; i < A.length; i++) {

        if ( out_of_range || not_unique || incorrect_length || not_a_number) {
            return false;
          }
    
    }
    return true;
}

// F21();