$(document).ready(function () {
    var counter = 0;
    var counter2 = 0;

    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td>   <select class="form-control" name="choose_lang">' +
            ' <option value=""> - العربية</option>' +
            ' <option value="">- English</option>' +
            ' <option value="">- Franch</option>' +
            '</select> </td>';
        cols += '<td>   <select class="form-control" name="read">' +
            '<option value=""></option>' +
            ' <option value=""> ممتاز</option>' +
            ' <option value="">جيد جدا</option>' +
            ' <option value=""> جيد</option>' +
            '</select> </td>';
        cols += '<td>   <select class="form-control" name="write">' +
            '<option value=""></option> ' +
            '<option value=""> ممتاز</option>' +
            ' <option value="">جيد جدا</option>' +
            ' <option value=""> جيد</option>' +
            '</select> </td>';

        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-success "  value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
    });


    $("#add_specific").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td>   <select class="form-control" name="sel_m">' +
            ' <option value=""></option>' +
            ' <option value="VG">دكتوراه</option>' +
            ' <option value="VG">ماجستير</option>' +
            '<option value="VG">بكالوريس</option>' +
            '<option value="VG">دبلوم</option>' +
            '<option value="VG">ثانوية عامة</option>' +
            '</select> </td>';

        cols += '<td>   <select class="form-control" name="special">' +
            '<option value=""></option>' +
            ' <option value="VG">هندسة حاسوب</option>' +
            ' <option value="VI">تكنولوجيا المعلومات</option>' +
            ' <option value="VG">امن معلومات</option>' +
            '</select> </td>';

        cols += '<td> <input class="form-control" name="University" type="text">  </td>';

        cols += '<td> <input name="Graduation_date"' +
            'class="form-control  date-picker"' +
            ' type="text" value="">' +
            '<span class="help-block"> </span>' +
            '  </td>';

        cols += '<td> <input class="form-control" name="GPA" type="text"  </td>';


        cols += '<td><input type="button" class="ibtnDel2 btn btn-md btn-success "  value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list2").append(newRow);
        counter2++;
    });


    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();
        counter2 -= 1
    });

    $("table.order-list2").on("click", ".ibtnDel2", function (event) {
        $(this).closest("tr").remove();
        counter2 -= 1
    });


});


function calculateRow(row) {
    var price = +row.find('input[name^="price"]').val();

}

function calculateGrandTotal() {
    var grandTotal = 0;
    $("table.order-list").find('input[name^="price"]').each(function () {
        grandTotal += +$(this).val();
    });
    $("#grandtotal").text(grandTotal.toFixed(2));
}