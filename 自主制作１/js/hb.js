$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#hb-menu").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#hb-menu a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#hb-menu").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});