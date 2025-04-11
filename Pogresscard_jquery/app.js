var generateProgressCard = () => {
    var studenDetails = {};
    // studenDetails.name = document.querySelector("#sname").value;

    studenDetails.name = $("#sname").val();
    studenDetails.age = $("sage").val();
    studenDetails.marks = [];
    for (var i = 0; i < 5; i++) {
        var id = '#m' + (i + 1);
        studenDetails.marks[i] = $(id).val();
        studenDetails.marks[i] = parseInt(studenDetails.marks[i]);
    }
    
   console.log(studenDetails);
   studenDetails.getTotalAndAvg = function() {
    this.total = 0;
    for (var i = 0 ; i < this.marks.length; i++) {
        this.total += this.marks[i];
    }
    this.avg = this.total / this.marks.length;
    this.getGrade();
   }

   studenDetails.getGrade = function() {
        this.grade = '';
        if (this.avg >= 60) {
            this.grade = 'PAssed'
        } else {
            this.grade = 'Failed';
        }
        this.displayDetails();
   }
   studenDetails.displayDetails = function() {
       $("#d_name").text(this.name);
       $("#d_age").text(this.age);
       $("#d_total").text(this.total);
       $("#d_avg").text(this.avg);
       $("#d_grade").text(this.grade);
   }

   studenDetails.getTotalAndAvg();
}