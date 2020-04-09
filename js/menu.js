var niubi = (function(){
    var $box = $('#box'),
        $bar = $('<div class="notepad-menubar"></div>'),
        $menus = $('<ul class="menu-title"></ul>'),
        $menus_list = [
            $('<ul class="menus"></ul>'),
            $('<ul class="menus" style="left: 54px;"></ul>'),
            $('<ul class="menus" style="left: 108px;"></ul>'),
            $('<ul class="menus" style="left: 162px;"></ul>'),
            $('<ul class="menus" style="left: 216px;"></ul>')
        ];
    
    var active = -1;

    for(var j=0; j<$menus_list.length; j++) {
        $menus_list[j].css({ display: 'none' });
    }

    function menuBar(menuData){
        for(var i=0; i<menuData.length; i++){
            var $title = $('<li class="title"></li>');
            $title.html(menuData[i].title);
            $title.attr('data-id', i);
            $menus.append($title);

            $title.click(function() {
                var i = Number(this.dataset.id);
                
                console.log(active);
                for(var j=0; j<$menus_list.length; j++) {
                    $menus_list[j].css({ display: 'none' });
                    $menus_list[i].css({ display: 'inline-block' });
                }
                if(active === -1) {
                    $menus_list[i].css({ display: 'inline-block' });
                    active = i;
                } else if(active === i) {
                    $menus_list[active].css({ display: 'none' });
                    
                    active = i;
                }else {
                    $menus_list[active].css({ display: 'none' });
                    active = i;
                }
            })
        }
        for(var i=0; i<menuData.length; i++) {
            var items = menuData[i].menuItems;
            var $me = $menus_list[i];
            for(var j=0; j<items.length; j++) {
                if(items[j].title === 'hr') {
                    var $hr = $('<li class="menu-hr"></li>');
                    $me.append($hr);
                    continue;
                }
                var $menu = $('<li class="menu-item"></li>');
                $menu.html(items[j].title);
                $menu.attr('data-x', i);
                $menu.attr('data-y', j);
                $me.append($menu);
            }
        }

    }

    menuBar(menuData);
    $bar.append($menus);
    $bar.append($menus_list);
    $box.append($bar);

})
