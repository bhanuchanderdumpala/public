class studentdetails {
    constructor(data) {
        this.name = data.name;
        this.age = data.age
        this.marks = data.marks;
    }


getTotalandAvg ()
{
this.total=0;
for(var i=0; i<this.marks.length; i++)
    {
    this.total+=this.marks[i];
}
console.log("total......"+this.total);
this.avg=this.total/this.marks.length;
this.getgrade();
}
getgrade()
{
if(this.avg>60)
    this.grade="You passed with firest class";
else{
    this.grade="You are in failed "; 
}
this.displayDetails();
}

displayDetails()
{
    $("#d_name").value=this.name;
    $("#d_name").text(this.name);
    $("#d_age").text(this.age);
    $("#d_avg").text(this.avg);
    $("#d_total").text(this.total);
    $("#d_grade").text(this.grade);

}
}

var generateProgressCard = () =>
{
    var data = {};
    data.name = $("#sname").val();
    data.age= $("#sage").val();
    data.marks = [];
    for (var i = 0; i < 5; i++) {
        var id = '#m' + (i + 1);
        data.marks[i] = $(id).val();
        data.marks[i] = parseInt(data.marks[i]);
    }
    var p1 = new studentdetails(data);
    p1.getTotalandAvg();

}
