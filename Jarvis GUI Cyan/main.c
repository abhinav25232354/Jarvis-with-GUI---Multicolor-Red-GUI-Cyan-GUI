// // #include <stdio.h>
// // #include <stdlib.h>

// // struct node{
// //     int data;
// //     struct node *link;
// // };

// // int main(){
// //     struct node *head = malloc(sizeof(struct node));
// //     head->data = 45;
// //     head->link = NULL;

// //     struct node *current = malloc(sizeof(struct node));
// //     current->data = 50;
// //     current->link = NULL;
// //     head->link = current;

// //     return 0;

// // }

// // #include <stdio.h>
// // #include <stdlib.h>

// // struct node{
// //     int data;
// //     struct node *link;
// // };

// // void countnodes(struct node *head){
// //     int count = 0;
// //     if (head == NULL)
// //         printf("Linked List is Empty");
// //     struct node *ptr = NULL;
// //     ptr = head;
// //     while(ptr != NULL){
// //         count++;
// //         ptr = ptr->link;
// //     }
// //     printf("Count = %d", count);
// // }

// // int main(){
// //     struct node *head = malloc(sizeof(struct node));
// //     head->data = 45;
// //     head->link = NULL;

// //     struct node *current = malloc(sizeof(struct node));
// //     current->data = 60;
// //     current->link = NULL;
// //     head->link = current;

// //     current = malloc(sizeof(struct node));
// //     current->data = 80;
// //     current->link = NULL;
// //     head->link->link = current;

// //     countnodes(head);
// // }

// // #include <stdio.h>
// // #include <stdlib.h>

// // struct node {
// //     int data;
// //     struct node *link;
// // };

// // void count(struct node *head){
// //     int count = 0;
// //     if (head == NULL)
// //         printf("Linked list is empty");
// //     struct node *ptr = NULL;
// //     ptr = head;
// //     while (ptr != NULL){
// //         count++;
// //         ptr = ptr->link;
// //     }
// //     printf("Total Number of elemnents in Linked list : %d", count);
// // }

// // int main(){
// //     struct node *head = malloc(sizeof(struct node));
// //     head->data = 60;
// //     head->link = NULL;

// //     struct node *current = malloc(sizeof(struct node));
// //     current->data = 80;
// //     current->link = NULL;
// //     head->link = current;

// //     current = malloc(sizeof(struct node));
// //     current->data = 90;
// //     current->link = NULL;
// //     head->link->link = current;

// //     current = malloc(sizeof(struct node));
// //     current->data = 98;
// //     current->link = NULL;
// //     head->link->link->link = head;

// //     count(head); 
// // }


// #include <stdio.h>
// #include <stdlib.h>

// struct node{
//     int data;
//     struct node *link;
// };

// void count(struct node *head){
//     int count = 0;
//     if(head == NULL)
//         printf("Linked list is Empty");
//     struct node *ptr = NULL;
//     ptr = head;
//     while(ptr != NULL){
//         count++;
//         ptr = ptr->link;
//     }
//     printf("Number of Elements : %d", count);
// }

// int main(){
//     struct node *head = malloc(sizeof(struct node));
//     head->data = 77;
//     head->link = NULL;

//     struct node *next = malloc(sizeof(struct node));
//     next->data = 98;
//     next->link = NULL;
//     head->link = next;

//     next = malloc(sizeof(struct node));
//     next->data = 102;
//     next->link = NULL;
//     head->link->link = next;

//     count(head);
// }



#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node *link;
};
void count(struct node *head){
    int count = 0;
    if (head == NULL){
        printf("Linked list is empty");
    }
    struct node *ptr = 0;
    ptr = head;
    while (ptr != NULL){
        count++;
        ptr = ptr->link;
    }
    printf("Total number elements in Linked list  %d", count);
}

void print(struct node *head){
    if (head == NULL){
        printf("Linked list is empty");
    }
    struct node *printer = NULL;
    printer = head;
    while (printer != NULL){
        for (int i=0;i<=printer->data;i++){
            printf("\nElement %d : %d\n", i, printer->data);
            printer = printer->link;
        }
    }
}

int main(){
    struct node *head = malloc(sizeof(struct node));
    head->data = 46;
    head->link = NULL;

    struct node *next = malloc(sizeof(struct node));
    next->data = 89;
    next->link = NULL;
    head->link = next;

    next = malloc(sizeof(struct node));
    next->data = 900;
    next->link = NULL;
    head->link->link = next;

    next = malloc(sizeof(struct node));
    next->data = 900;
    next->link = NULL;
    head->link->link->link = next;

    count(head);
    print(head);
    return 0;
}