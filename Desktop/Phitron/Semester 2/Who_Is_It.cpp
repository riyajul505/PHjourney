#include <bits/stdc++.h>
using namespace std;

class Student{

    public:
        int id;
        char name[100];
        char section;
        int marks;

    Student(int s_id, char s_name[], char sec, int total_marks){
        id = s_id;
        strcpy(name, s_name);
        section = sec;
        marks = total_marks;
    }
};

int main() {

   

    int n;
    cin >> n;
    // loop till n'th times
    for(int i = 0; i<n; i++){

        // student 1
        int s1_id, s1_marks;
        char s1_section, s1_name[100];

        // taking input 
        cin >> s1_id;
        cin >> s1_name;
        cin >> s1_section;
        cin >> s1_marks;

        // creating s1 object
        Student s1_obj(s1_id, s1_name, s1_section, s1_marks);


        // student 2
        int s2_id, s2_marks;
        char s2_section, s2_name[100];

        // taking input 
        cin >> s2_id;
        cin >> s2_name;
        cin >> s2_section;
        cin >> s2_marks;

        // creating s2 object
        Student s2_obj(s2_id, s2_name, s2_section, s2_marks);


        // Student 3
        int s3_id, s3_marks;
        char s3_section, s3_name[100];

        // taking input 
        cin >> s3_id;
        cin >> s3_name;
        cin >> s3_section;
        cin >> s3_marks;

        // creating s3 object
        Student s3_obj(s3_id, s3_name, s3_section, s3_marks);


        // finding max marks object
        if(s1_obj.marks >= s2_obj.marks && s1_obj.marks >= s3_obj.marks){
            cout << s1_obj.id << " " << s1_obj.name << " " << s1_obj.section << " " << s1_obj.marks;
        }
        else if(s2_obj.marks > s1_obj.marks && s2_obj.marks >= s3_obj.marks){
            cout << s2_obj.id << " " << s2_obj.name << " " << s2_obj.section << " " << s2_obj.marks;
        }
        else if(s3_obj.marks > s1_obj.marks && s3_obj.marks > s2_obj.marks){
            cout << s3_obj.id << " " << s3_obj.name << " " << s3_obj.section << " " << s3_obj.marks;
        }

        cout << endl;
    }


   return 0; 
}