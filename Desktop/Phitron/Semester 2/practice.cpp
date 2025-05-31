#include <bits/stdc++.h>
using namespace std;

class Student{

    public:
        int roll;
        double cgpa;

    Student(int r, double gp){
        roll = r;
        cgpa = gp;
    }

};

int main() {

   
    Student sakib(23, 3.4);
   
    cout << sakib.roll << " " << sakib.cgpa;

   return 0; 
}