import java.util.Scanner; 

class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);
    String str;
    System.out.println("Enter username"); 
    str = myObj.nextLine(); 
  
    System.out.println("Enter letter");   
    String letter = myObj.nextLine();   

   int index =str.indexOf(letter);
  if(index != -1){
    System.out.println(str.substring(index+1)); 
  }else{
    System.out.println("The letter does not exist in the sentence");
  }
  }
}