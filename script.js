

$(document).ready(function(){
    $('form').submit(function(){
      var Fname=document.form1.firstname.value;
      var Lname=document.form1.lastname.value;
      var Email=document.form1.email.value;
      var Pnum=document.form1.phonenum.value;
      addUser(Fname,Lname,Email,Pnum);

      return false;
    })
});

function addUser(Fname,Lname,Email,Pnum)
{
  var tablerow=$('table tr').length;
  var user="<tr><td>"+tablerow+"</td><td>"+ Fname + "</td><td>"+Lname+"</td><td>"+ Email + "</td><td>"+Pnum+"</td></tr>";
  $('table>tbody').append(user);
}
