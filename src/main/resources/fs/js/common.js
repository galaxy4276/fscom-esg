// 공통 코드 불러오기
function fn_getCommonCode(upCdId) {
    $.ajax({
        url: $('#ctxRoot').val() + '/mng/getCommonCode',
        data: {"upCdId" : upCdId},
        type: 'POST',
        async: false,
        success: function (data) {
            // html text
            for(let code of data){
                if($(".CODE_" + code["CD_NAME"]).length > 0){   // text
                    $(".CODE_" + code["CD_NAME"]).text(code["CD_COMMENT"]);
                }
                if($(".HOLDER_" + code["CD_NAME"]).length > 0){   // placeholder
                    $(".HOLDER_" + code["CD_NAME"]).prop("placeholder", code["CD_COMMENT"]);
                }
            }
        },
        error: fn_handleAjaxError
    });
}

// Ajax 실패시
function fn_handleAjaxError(jqXHR, textStatus, errorThrown) {
    console.log('Ajax 요청 중 에러가 발생했습니다.');
    console.log('jqXHR:', jqXHR);
    console.log('textStatus:', textStatus);
    console.log('errorThrown:', errorThrown);
}

// validation 함수
function fn_regDataValidation(wrong){
    $(".opacity-one").addClass("opacity-zero");
    $(".opacity-one").removeClass("opacity-one");
    if(wrong == "hide"){
        return;
    }
    $("#"+wrong).removeClass("opacity-zero"); $("#"+wrong).addClass("opacity-one");
}

// 오늘과 어제 주의, 경고 데이터가 없을 시
function fn_createDefaultData() {
    let tempJson = {};
    for (let i = 0; i < 24; i++) {
        tempJson[i + "HOUR"] = 0;
    }
    return tempJson;
}

// 2자릿수 만들기
function fn_formatToTowDigits(number) {
    return number < 10 ? `0${number}` : `${number}`;
}

// 전화번호 자동 하이푼 함수
function fn_autoHyphen(target){
    target.value = target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
}

// 페이지 설정
function fn_pageList(nowPage, totalPages , pageOnclick) {
    // 페이징 템플릿 설정
    $.template(
        'page-list',
        '{{if page == startPage}}' +
        '<a href="#" class="page-num" onclick="{{html pageOnclick}}(1); event.preventDefault();">처음</a>' +
        '{{if page -1 == 0}}' +
        '<a href="#" class="page-num" onclick="{{html pageOnclick}}({{html page}}); event.preventDefault();">◀</a>' +
        '{{else}}' +
        '<a href="#" class="page-num" onclick="{{html pageOnclick}}({{html page - 5}}); event.preventDefault();">◀</a>' +
        '{{/if}}' +
        '{{/if}}' +
        '{{if page == nowPage}}' +
        '<a href="#" class="page-num active" onclick="{{html pageOnclick}}({{html page}}); event.preventDefault();">{{html page}}</a>' +
        '{{else}}' +
        '<a href="#" class="page-num" onclick="{{html pageOnclick}}({{html page}}); event.preventDefault();">{{html page}}</a>' +
        '{{/if}}' +
        '{{if page == endPage}}' +
        '{{if page == totalPages}}' +
        '<a href="#" class="page-num" onclick="{{html pageOnclick}}({{html page}}); event.preventDefault();">▶</a>' +
        '{{else}}' +
        '<a href="#" class="page-num" onclick="{{html pageOnclick}}({{html page + 1}}); event.preventDefault();">▶</a>' +
        '{{/if}}' +
        '<a href="#" class="page-num" onclick="{{html pageOnclick}}({{html totalPages}}); event.preventDefault();">마지막</a>' +
        '{{/if}}'
    );

    const pageRange = 5;
    let startPage = Math.floor((nowPage - 1) / pageRange) * pageRange + 1;
    let endPage = startPage + pageRange - 1;
    if (endPage > totalPages) {
        endPage = totalPages;
    }
    $(".page-list").empty();
    for (let i = startPage; i <= endPage; i++) {
        let pageJson = {"page":i, "startPage":startPage, "endPage":endPage, "totalPages":totalPages, "nowPage":nowPage, "pageOnclick":pageOnclick};
        $(".page-list").append($.tmpl('page-list', pageJson));
    }
}

// Table No Data
function fn_noData(tableName, colspan) {
    $("." + tableName + " tbody").empty().append('<tr><td colspan=' + colspan + ' style="text-align:center;">No Data</td></tr>');
    $(".page-list").addClass("d-none");
    $(".total-count, .page-last-row").text("0"); $(".page-first-row").text("1");
}

// Table data < 15 Row
function fn_handleSmallResultData(data, className, rowLength) {
    if(data.length < rowLength){
        for(let i = 0; i < rowLength - data.length; i++){
            $("." + className + " tbody").append(`<tr class="empty-tr"><td colspan="${rowLength}" class="empty-td">empty</td></tr>`)
        }
    }
}

// 문장 마스킹 처리
function fn_masking(str) {
    let result='';
    if(str) {
        for(let i=0; i<str.length; i++)
            if(i%2==1) result+='*';
            else result+=str[i];
    }
    return result;
}
