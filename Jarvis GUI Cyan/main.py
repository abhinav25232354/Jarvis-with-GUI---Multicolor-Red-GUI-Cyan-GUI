# making a 
def multiply_matrix(matA, matB):
    # Get dimensions of matrices
    rows_A = len(matA) # row 1 of the matrix 1
    cols_A = len(matA[0]) # column 1 of matrix 1
    rows_B = len(matB) # row of the matrix 2
    cols_B = len(matB[0]) # column of the matrix 2

    # Check if matrices can be multiplied
    if cols_A != rows_B:
        print("Matrices cannot be multiplied. Number of columns in the first matrix must be equal to the number of rows in the second matrix.")
        return None # Returning none to the function

    # Initialize result matrix with zeros
    result = [[0 for _ in range(cols_B)] for _ in range(rows_A)]
    # result of the matrix will be 0

    # Perform matrix multiplication
    for i in range(rows_A): # for loop for i(rows)
        for j in range(cols_B): # for loop for j(column)
            for k in range(cols_A): # for loop for result matrix
                result[i][j] += matA[i][k] * matB[k][j] # printing all the elements of the result matrix

    return result # returning result variable to the function back

# Define two matrices
matA = [[1, 2, 3], # matrix 1 row 1
        [4, 5, 6]] # matrix 1 row 2

matB = [[7, 8], # matrix 2 row 1
        [9, 10], # matrix 2 row 2
        [11, 12]] #matrix 2 row 3

# Perform matrix multiplication
result = multiply_matrix(matA, matB) # calling multiplication function

# Print the result
if result:
    print("Matrix A:") # print matrix A as string
    for row in matA: # for loop for rows in matrix 1
        print(row) # print rows of matrix 1

    print("\nMatrix B:") #print matrix B as string
    for row in matB: # for loop for rows in matrix 2
        print(row) # print rows of matrix 2

    print("\nResult of Matrix Multiplication (A * B):") # print as string
    for row in result: # for loop for rows in result matrix
        print(row) # print rows of result matrix
    
'''This is a multiline comment which is in-built in python to describe
functions and code more efficiently and effectively by adding comments your program looks
great and highly professional and very easy to understand'''