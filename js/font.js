var font = (function(){
  var font = 
  '<div id="font" style="display: none;" class="notepad-dlg-mask notepad-dlg-font">'+
            '<div class="dialogbox notepad-dlgbox ui-draggable">'+
                '<div class="notepad-dlg-titlebar ui-draggable-handle">'+
                    '<p class="title">字体</p>'+
                    '<span class="close-btn" title="关闭">✖</span>'+
                '</div>'+
                '<div class="main notepad-dlg-main">'+
                    '<div class="font-family">'+
                        '<p>字体(F):</p>'+
                        '<div class="notepad-com-list" style="width: 176px;">'+
                            '<input id="family" class="editor" type="text" value="Agency FB">'+
                            '<br>'+
                            '<ul class="list fa">'+
                                '<li class="item selected" style="font-family: "Agency FB";">Agency FB</li>'+
                                '<li class="item" style="font-family: "Algerian";">Algerian</li>'+
                                '<li class="item" style="font-family: "Arial";">Arial</li>'+
                                '<li class="item" style="font-family: "Arial Rounded MT";">Arial Rounded MT</li>'+
                                '<li class="item" style="font-family: "Axure Handwriting";">Axure Handwriting</li>'+
                                '<li class="item" style="font-family: "Bahnschrift";">Bahnschrift</li>'+
                                '<li class="item" style="font-family: "Baskerville Old Face";">Baskerville Old Face</li>'+
                                '<li class="item" style="font-family: "微软雅黑";">微软雅黑</li>'+
                                '<li class="item" style="font-family: "楷体";">楷体</li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+
                    '<div class="font-style">'+
                        '<p>字形(Y):</p>'+
                        '<div class="notepad-com-list" style="width: 132px;">'+
                            '<input id="shape" class="editor" type="text" value="常规">'+
                            '<br>'+
                            '<ul class="list st">'+
                                '<li class="item selected">常规</li>'+
                                '<li class="item" style="font-style: italic;">斜体</li>'+
                                '<li class="item" style="font-weight: blod;">粗体</li>'+
                                '<li class="item" style="font-weight: blod; font-style: italic;">粗偏斜体</li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+
                    '<div class="font-size">'+
                        '<p>大小(S):</p>'+
                        '<div class="notepad-com-list" style="width: 64px;">'+
                            '<input id="size" class="editor" type="text" value="16">'+
                            '<br>'+
                            '<ul class="list num">'+
                                '<li class="item">8</li>'+
                                '<li class="item">9</li>'+
                                '<li class="item">10</li>'+
                                '<li class="item">11</li>'+
                                '<li class="item">12</li>'+
                                '<li class="item">13</li>'+
                                '<li class="item">14</li>'+
                                '<li class="item">15</li>'+
                                '<li class="item selected">16</li>'+
                                '<li class="item">17</li>'+
                                '<li class="item">18</li>'+
                                '<li class="item">19</li>'+
                                '<li class="item">20</li>'+
                                '<li class="item">21</li>'+
                                '<li class="item">22</li>'+
                                '<li class="item">24</li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+
                    '<fieldset class="sample">'+
                        '<legend>示例</legend>'+
                        '<p class="sample-txt" style="font-family: "Berlin Sans FB"; font-size: 16pt;">AaBbYyZz</p>'+
                    '</fieldset>'+
                    '<div class="script">'+
                        '<label>'+
                            '"脚本(R):"'+
                            '<br>'+
                            '<select>'+
                                '<option value="西欧语言">西欧语言</option>'+
                                '<option VALUE="中文 GB2312">中文 GB2312</option>'+
                            '</select>'+
                        '</label>'+
                    '</div>'+
                    '<input class="btn-ok btn" type="button" value="确定">'+
                    '<input class="btn-cancel btn" type="button" value="取消">'+
                '</div>'+
            '</div>'+
        '</div>';
  var $box = $('#box');
  $box.append(font);
  var $font = $('#font'),
      $close = $('.close-btn'),
      $ok = $('.btn-ok'),
      $cancel = $('.btn-cancel'),
      $size = $('#size'),
      $shape = $('#shape'),
      $family = $('#family');
  
  $(".num").on("click","li",function() {
      $(".num li").removeClass("selected");
      $(this).addClass("selected");
      console.log($(this).text())
      $size.val($(this).text());
  })

  $(".fa").on("click","li",function() {
      $(".fa li").removeClass("selected");
      $(this).addClass("selected");
      $family.val($(this).text());
  })

  $(".st").on("click","li",function() {
      $(".st li").removeClass("selected");
      $(this).addClass("selected");
      $shape.val($(this).text());
  })

  $close.click(function() {
      $font.css({ 'display': 'none' })
  })

  $cancel.click(function() {
    $font.css({ 'display': 'none' })
  })








})