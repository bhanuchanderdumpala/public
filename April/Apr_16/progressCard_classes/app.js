
class StudenDetails {
    constructor(data) {
        this.name = data.name;
        this.age = data.age
        this.marks = data.marks;
    }
    getTotalAndAvg() {
        this.total = 0;
        for (var i = 0 ; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
        this.getGrade();
    }
    getGrade() {
        this.grade = '';
        if (this.avg >= 60) {
            this.grade = 'PAssed'
        } else {
            this.grade = 'Failed';
        }
        this.displayDetails();
    }
    displayDetails() {
        $("#d_name").text(this.name);
        $("#d_age").text(this.age);
        $("#d_total").text(this.total);
        $("#d_avg").text(this.avg);
        $("#d_grade").text(this.grade);
        resetDetails();
    }
}

var generateProgressCard = () => {
    var data = {};

    data.name = $("#sname").val();
    data.age = $("#sage").val();
    data.marks = [];
    for (var i = 0; i < 5; i++) {
        var id = '#m' + (i + 1);
        data.marks[i] = $(id).val();
        data.marks[i] = parseInt(data.marks[i]);
    }
    var p1 = new StudenDetails(data);
    p1.getTotalAndAvg();
}

var resetDetails = () => {
    $("#sname").val('');
    $("#sage").val('');
    for (var i = 0; i < 5; i++) {
        var id = '#m' + (i + 1);
       $(id).val('');
    }
}