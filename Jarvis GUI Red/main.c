#include <stdio.h>

int main(){
    int a, b;
    printf("Enter First Digit : ");
    scanf("%d", &a);
    printf("Enter Second Digit : ");
    scanf("%d", &b);
    int c = a + b;
    printf("Sum of these two Variables is %d", c);
    return 0;
}