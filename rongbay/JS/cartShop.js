var pTop = jQuery(window).scrollTop() + 50;
var user_info = {email:'', fullname:'',mobile_phone:'',dia_chi:'', thanh_pho:1, thoi_gian:1, ngay:2, txt_thanhpho:'', txt_ngay:'', txt_thoigian:''};
var order_id = 0;

//DungNH define
var ad_title = "";//Tiêu đề tin
var catName = "";//Tên chuyên mục
var item_id = "";//Id tin
var cat_id = 0;//Id chuyên mục
var choicePackage = 0;//Số gói chọn mua
var item_choice = "";//Số item đc chọn thanh toán
var flgCart = 0;//0: Click từ tin; 1: click từ giỏ hàng
var sum_money_cart = 0;//Tổng giá trị thanh toán giỏ hàng
var payment_types = 0;
var cartId = 0; //id của giỏ hàng
var cart_code = ""; //Mã của giỏ hàng
var cart_code_sms = 0; //Mã của giỏ hàng khi thanh toán bằng sms
var num_sms_cart = 0; //Tổng số sms phải nhắn khi chọn hình thức thanh toán bằng sms
var num_item_cart = 0; //Tổng số item có trong giỏ hàng
var aryResultCart = {}; //Mảng kết quả giỏ hàng
var aryCartHistory = {}; //Mảng lưu lại thông tin các giỏ hàng
var aryCartInfo = {}; //Danh sách tin rao của 1 giỏ hàng
var typeAlert = 0; //Thông báo khi đăng tin chờ
var sum_num_up = 0;

shop.cart = {
//	--------------------------------- config -------------------------------- //
    conf:{
        extra:{},
        product:null,
        user:{fullname:'',email:'',mobile_phone:'',type:'guest',address:'',city:0,district:'',otp:'',note:''},
        customer:{},
        userInfo:1,
        userAddress:1,
        cart:{payment_id:""},
        atm:{},
        cod:{},
        card:[50000,100000,200000,300000,500000],
        card_post: {},
        card_rate: 9 / 10,
        shipping:{active:false, COD:false, fee:0, fee_f:'0 đ', feeCOD:0, feeCOD_f:'0 đ', note:'', check:false, code:'SHIP'},
        bank:{
            'mb_bank':     '%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+0651100016002%3Cstrong%3E%3Cbr%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+th%C6%B0%C6%A1ng+m%E1%BA%A1i+c%E1%BB%95+ph%E1%BA%A7n+Qu%C3%A2n+%C4%91%E1%BB%99i+-+CN+Hai+B%C3%A0+Tr%C6%B0ng+%28MB%29%3C%2Fstrong%3E',
            'acb_bank': '%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+37182319%3Cbr%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+%C3%81+Ch%C3%A2u+chi+nh%C3%A1nh+H%C3%A0+N%E1%BB%99i+%28ACB%29%3C%2Fstrong%3E',
            'vc_bank':     '%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+002.1.00.183924.3%3Cbr%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+Vietcombank+%28VCB%29+H%C3%A0+N%E1%BB%99i%3C%2Fstrong%3E',
            'vib_bank': '%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+001704060035755%3Cbr%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+TMCP+Qu%E1%BB%91c+t%E1%BA%BF+Vi%E1%BB%87t+Nam+%28VIB%29%3C%2Fstrong%3E',
            'donga_bank': '%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+002387340001%3Cbr%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+%C4%90%C3%B4ng+%C3%81+chi+nh%C3%A1nh+B%E1%BA%A1ch+Mai+-+H%C3%A0+N%E1%BB%99i%3C%2Fstrong%3E',
            'techcom_bank': '%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+10320141354011%3Cbr%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+Techcombank+CN+Th%C4%83ng+Long%3C%2Fstrong%3E',
            'bidv_bank': '%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+12010000318895%3Cbr%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+BIDV+S%E1%BB%9F+Giao+d%E1%BB%8Bch%3C%2Fstrong%3E',
            'vietinbank': '%3Cp%3E%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+1020.1000.1108.169%3Cbr+%2F%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr+%2F%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+C%C3%B4ng+th%C6%B0%C6%A1ng+Vi%E1%BB%87t+Nam+chi+nh%C3%A1nh+Hai+B%C3%A0+Tr%C6%B0ng%3C%2Fstrong%3E%3C%2Fp%3E',
            'agribank': '%3Cp%3E%3Cstrong%3E-+S%E1%BB%91+TK%3A%3C%2Fstrong%3E+1483.2010.047.40%3Cbr+%2F%3E%3Cstrong%3E-+Ch%E1%BB%A7+t%C3%A0i+kho%E1%BA%A3n%3A%3C%2Fstrong%3E+C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+Truy%E1%BB%81n+th%C3%B4ng+Vi%E1%BB%87t+Nam%3Cbr+%2F%3E%3Cstrong%3E-+Ng%C3%A2n+h%C3%A0ng+AGRIBANK+chi+nh%C3%A1nh+Th%E1%BB%A7+%C4%90%C3%B4%3C%2Fstrong%3E%3C%2Fp%3E'
        }
    },

//	--------------------------------- main action -------------------------------- //	
    /*Begin DungNH proccess shopping cart for Rongbay*/
    doAddItem:function() {
        //choicePackage = num_pack; 
        shop.cart.stepZero();
    },

    viewMoreSmsInfo : function() {
        if (jQuery('.rule_sms').hasClass('hidden')) {
            jQuery('.rule_sms').slideDown().removeClass('hidden');
        }
        else {
            jQuery('.rule_sms').slideUp().addClass('hidden');
        }
    },

    
    //function chọn/bỏ chọn tất cả
    checkAll: function() {
        item_choice = "";
        var objCheckbox = jQuery('.clssId');
        if (jQuery('#chkAll').attr('checked') == true) {
            if (objCheckbox.length > 0) {
                for (var i = 0; i < (objCheckbox.length); i++) {
                    jQuery('#item_' + i).attr('checked', 'checked');
                    item_choice += "," + jQuery('#item_' + i).attr('value');
                }
            }
        }
        else {
            if (objCheckbox.length > 0) {
                for (var i = 0; i < (objCheckbox.length); i++) {
                    jQuery('#item_' + i).attr('checked', '');
                }
            }
        }

        if (item_choice.substring(0, 1) == ',') item_choice = item_choice.substring(1);
    },

    /*End DungNH proccess shopping cart for Rongbay*/


    addItem: function (id, start, end, buyer, buyer_need) {
        shop.cart.step();
    },


    btnCancelBuyUp : function(item_id) {
        //shop.hide_overlay_popup('cart-regulations');
        window.location = WEB_DIR + "?page=detail&ad_id=" + item_id;
    },

//	--------------------------------- showing popup -------------------------------- //
    //Form hiển thị chọn gói cho tin
    frmChoicePackage : function(id, cat_name, title, type) {
        de_active_sel();
        item_id = id;
        catName = cat_name;
        ad_title = title;
        typeAlert = type;
        shop.show_overlay_popup('cart-regulations', 'Mua lượt đăng lại',
            shop.cart.theme.choipackage('cart-regulations', 'Mua lượt đăng lại'),
            {
                background: {
                    'background-color' : 'transparent'
                },
                border: {
                    'background-color' : 'transparent',
                    'padding' : '0px'
                },
                title: {
                    'display' : 'none'
                },
                content: {
                    'padding' : '10px',
                    'width'   : '710px',
                    'height'  : '900px',
                    'font-size': '12px'
                }
            });
    },

    //Form hiển thị giỏ hàng
    frmViewCart : function(id, pack, flg) {
        de_active_sel();//fix IE 6 bug Select option Z-index vô hạn

        choicePackage = pack;
        item_id = id;
        flgCart = flg;
        var data = "packId=" + choicePackage + "&item_id=" + item_id + "&item_choice=" + item_choice;
        jQuery.ajax({
            type: "POST",
            url:"ajax.php?act=payment&code=getItemCart",
            data: data,
            dataType: 'json',
            success: function(json) {
                num_item_cart = json.num_item_cart;
                jQuery('#num_item_cart').attr('innerHTML', "<b>Có " + num_item_cart + " tin</b>");
                jQuery('#num_item_cart').attr('innerHTML', "<span>" + num_item_cart + "</span>");
                shop.cart.viewListItemCart();
                jQuery('#listItemChoiceCart').attr('innerHTML', json.templates);
                jQuery('input.clssId').each(function() {
                    //ngannv dev mặc định chọn tin khi người dùng chọn mua tin đó
                    if (item_id!=0 && jQuery(this).attr('value')==item_id) {
                        jQuery(this).attr('checked',true);
                        shop.cart.onclickChoiceItem();
                    }
                });
                shop.cart.mark_cart();
            }
        });

        return false;
    },

    viewListItemCart : function() {

        shop.show_overlay_popup('cart-regulations', 'Thông tin giỏ hàng',
            shop.cart.theme.viewCart('cart-regulations', 'Thông tin giỏ hàng'),
            {
                background: {
                    'background-color' : 'transparent'
                },
                border: {
                    'background-color' : 'transparent',
                    'padding' : '0px'
                },
                title: {
                    'display' : 'none'
                },
                content: {
                    'padding' : '0px',
                    'width'   : '850px',
                    'height'  : '900px',
                    'font-size': '12px'
                }
            });
    },

    //Xóa item khỏi giỏ hàng
    removeItemCartHistory : function(item_id) {
        if (!confirm("Bạn có chắc chắn xóa đơn hàng này không?")) return;
        var data = "item_id=" + item_id;
        jQuery.ajax({
            type: "POST",
            url:"ajax.php?act=payment&code=historyCart",
            data: data,
            dataType: 'json',
            success: function(json) {
                //shop.cart.viewListItemCart();
                jQuery('#listItemHistory').attr('innerHTML', json.templates);

            }
        });


    },

    removeItemCart : function(item_id) {
        if (!confirm("Bạn có chắc chắn xóa tin rao này khỏi giỏ hàng không?")) return;
        var data = "item_id=" + item_id + "&remove_cart=1";
        jQuery.ajax({
            type: "POST",
            url:"ajax.php?act=payment&code=getItemCart",
            data: data,
            dataType: 'json',
            success: function(json) {
                shop.cart.viewListItemCart();
                num_item_cart = json.num_item_cart;
                jQuery('#num_item_cart').attr('innerHTML', "<span>" + num_item_cart + "</span>");
                jQuery('#listItemChoiceCart').attr('innerHTML', json.templates);
                shop.cart.load_checked();
                var choice = true;
                //ngannv update lỗi chọn tin rồi xóa nhưng vẫn thực hiện thanh toán dc
                //lam mới lại item_choice
                item_choice = "";
                jQuery('input.clssId').each(function() {
                    if (jQuery(this).attr('checked')) {
                        item_choice += ',' + jQuery(this).attr('value');
                        choice = false;
                    }
                });
                if (choice) {
                    item_choice = "";
                }
                //alert(item_choice);

            }
        });
    },

    //Thay đổi gói trong giỏ hàng
    changePack : function(o, item_id) {

        var packId = jQuery('#num_pack_' + item_id).attr("value");
        var data = "item_id=" + item_id + "&packId=" + packId;
        jQuery.ajax({
            type: "POST",
            url:"ajax.php?act=payment&code=changePackItem",
            data: data,
            dataType: 'json',
            success: function(json) {
                choicePackage = packId;
                shop.cart.viewListItemCart();
                jQuery('#listItemChoiceCart').attr('innerHTML', json.templates);
                shop.cart.load_checked();
            }
        });
        shop.cart.onclickChoiceItem();//update ngannv
    },
    load_checked:function() {
        //ngannv def : giữ lại trạng thái của checkbox khi thục hiện một số thao tac như :xóa một tin, thay đổi select box
        if (item_choice != '') {
            //ngannv dev update checkbox khi chon selectbox
            var arrItemId = item_choice.split(',');
            for (var i = 0; i < arrItemId.length; i++) {
                // alert(arrItemId[i]);
                jQuery("input.clssId").each(function() {
                    var check = jQuery(this).attr("value");
                    if (check == arrItemId[i]) {
                        jQuery(this).attr("checked", "true");

                    }
                });
            }//end for
        }
        //end ngannv
        shop.cart.mark_cart();
    },
    mark_cart:function() {
        //ngannv def chức năng đánh dấu mục chọn băng màu nền BG
        jQuery('input.clssId').each(function() {
            if (jQuery(this).attr('checked')) {
                jQuery(this).parent().parent().addClass('cart_choice');
            } else {
                jQuery(this).parent().parent().removeClass('cart_choice');
            }
        });
    },
    onclickChoiceItem : function() {
        shop.cart.mark_cart();
        item_choice = "";
        sum_num_up = 0;
        var up_item = 0;
        var objCheckbox = jQuery('.clssId');
        if (objCheckbox.length > 0) {
            for (var i = 0; i < (objCheckbox.length); i++) {
                if (jQuery('#item_' + i).attr('checked') == true) {
                    item_choice += "," + jQuery('#item_' + i).attr('value');
                    up_item = jQuery('#item_' + i).attr('value');
                    //sum_num_up 	+= + jQuery('#num_pack_'+up_item).attr("value");
                    sum_num_up += parseInt(jQuery('#num_pack_' + up_item + ' :selected').text());
                }
            }
            if (item_choice.substring(0, 1) == ',') item_choice = item_choice.substring(1);
        }
        //alert(sum_num_up);//nganvntest
    },

    //Form hiển thị phương thức thanh toán
    stepZero:function() {
        if (item_choice == '') {
            alert('Bạn chưa chọn tin rao!');
            return false;
        }
        
        /*if (user_id < 0) {
        	//Hiển thị màn hình thanh toán bằng gold
        	shop.cart.showPaymentGold();
        	return;
        }*/

        shop.show_overlay_popup('cart-regulations', 'Chọn hình thức thanh toán',
            shop.cart.theme.regulations('cart-regulations', 'Chọn hình thức thanh toán'),
            {
                background: {
                    'background-color' : 'transparent'
                },
                border: {
                    'background-color' : 'transparent',
                    'padding' : '0px'
                },
                title: {
                    'display' : 'none'
                },
                content: {
                    'padding' : '0px',
                    'width'   : '710px',
                    'height'  : '900px',
                    'font-size': '12px'
                },
                release: function() {
                    jQuery('.paymentChooseType').click(function() {
                        shop.cart.choosePayment(this)
                    })
                        .hover(
                        function() {
                            jQuery('.pay_active').removeClass('pay_active');
                            jQuery(this).addClass('pay_active');
                            jQuery('.clicked').addClass('pay_active');
                        },
                        function() {
                            jQuery('.pay_active').removeClass('pay_active');
                            jQuery('.clicked').addClass('pay_active');

                        }
                    );
                    var type = shop.is_exists(shop.cart.conf.cart.payment_id) ? shop.cart.conf.cart.payment_id : '';
                    if (type == 'atm') {
                        shop.cart.restoreBank();
                    }
                }
            });
    },
    
    //Màn hình thanh toán giỏ hàng bằng gold
    showPaymentGold: function() {
    	
    },

    //Form nhập thông tin cá nhân
    stepOne:function() {
        if (IS_LOGIN) {
            user_info.email = user_email;
            user_info.fullname = user_name;
            user_info.mobile_phone = user_mobile;
        }

        var tpl = shop.cart.theme.register('cart-check-out-step1', 'Nhập thông tin cá nhân');
        if (tpl != '') {
            shop.show_overlay_popup('cart-check-out-step1', 'Nhập thông tin cá nhân',
                tpl,
                {
                    background: {
                        'background-color' : 'transparent'
                    },
                    border: {
                        'background-color' : 'transparent',
                        'padding' : '0px'
                    },
                    title: {
                        'display' : 'none'
                    },
                    content: {
                        'padding' : '0px',
                        'width' : '355px',
                        'font-size': '12px'
                    }
                });
        }
        jQuery('input#cart_fullname').select();
        document.getElementById('cart_fullname').select();
    },

    stepTwo:function(back) {

        if (shop.cart.conf.cart.payment_id == 'ship') {
            shop.show_overlay_popup('cart-check-out-step2', 'Thông tin giao hàng',
                shop.cart.theme.moreInfo('cart-check-out-step2', 'Thông tin giao hàng'),
                {
                    background: {
                        'background-color' : 'transparent'
                    },
                    border: {
                        'background-color' : 'transparent',
                        'padding' : '0px'
                    },
                    title: {
                        'display' : 'none'
                    },
                    content: {
                        'padding' : '0px',
                        'width' : '415px',
                        'font-size': '12px'
                    },
                    release:function() {
                        if (shop.cart.conf.user.type == 'customer' && shop.cart.conf.customer.address != '' && shop.cart.conf.customer.district != '' && shop.cart.conf.customer.city > 0 && shop.is_exists(city_list[shop.cart.conf.customer.city])) {
                            shop.cart.conf.userAddress = 1;
                        } else {
                            shop.cart.conf.userAddress = 0;
                        }
                        shop.district.loadDistrict(shop.cart.conf.user.city);
                    }
                });
        }
        else {
            if (back) {
                /*if(  shop.cart.conf.cart.payment_id=='cop')
                 {
                 shop.cart.doAddItem();
                 }
                 else
                 {
                 shop.cart.stepOne();
                 }*/
                //ngannv update bug backbutton k lưu thông tin người dùng đã thay đổi
                user_name = jQuery('input#cart_fullname').attr('value');
                user_email = jQuery('input#cart_email').attr('value');
                ;
                user_mobile = jQuery('input#cart_tel').attr('value');
                ;
                shop.cart.stepOne();
            }
            else
                shop.cart.stepThree();
        }
    },

    //Form Thanh toán online
    stepThree: function() {
        var data = "payment_id=" + shop.cart.conf.cart.payment_id + "&item_choice=" + item_choice;

        //Trường hợp thanh toán bằng sms
        if (shop.cart.conf.cart.payment_id == "cop") {
            data += "&email_pay=" + user_info.email;
            data += "&fullname=" + user_info.fullname;
            data += "&mobile=" + user_info.mobile_phone;
        }

        jQuery.ajax({
            type: "POST",
            url:"ajax.php?act=payment&code=getListItemCart",
            data: data,
            dataType: 'json',
            success: function(json) {
                //if(shop.cart.conf.cart.payment_id == "cop" && json.cartId > 0 && json.checkItem)
                if (shop.cart.conf.cart.payment_id == "cop") {
                    cart_code_sms = json.cartId;
                }

                var sum_num_pack = "Tổng giá trị thanh toán: " + number_format(json.num_pack) + "VNĐ";
                
                var gold_current = "- Hiện tại quý khách đang có: <b style='color:red'>" + number_format(json.RB_GOLD) + "</b> Gold";
                var sum_num_gold = "- Đơn hàng này có giá trị tương ứng: <b style='color:red'>" + number_format(json.num_pack) + "</b> Gold";
                
                var gold_need_recharge = 0;
                if (json.num_pack > json.RB_GOLD) {
                	gold_need_recharge = json.num_pack - json.RB_GOLD;
                }
                if (gold_need_recharge > 0) {
                	var str_gold_need = "- Quý khách phải nạp thêm: <b style='color:red'>" + number_format(gold_need_recharge) + "</b> Gold";
                	var button_gold_need = "<a class=\"blueButton\" id=\"fl\" onclick=\"pay_more_gold("+json.num_pack+");\" href=\"javascript:void(0)\"><span><span>NẠP GOLD</span></span></a>";
                }
                
                sum_money_cart = json.num_pack;
                aryResultCart = json.aryResultCart;

                num_sms_cart = Math.ceil(sum_money_cart / 15000);

                shop.show_overlay_popup('cart-confirm', 'Thanh Toán',
                    shop.cart.theme.confirmProduct('cart-confirm', 'Thanh Toán'),
                    {
                        background: {
                            'background-color' : 'transparent'
                        },
                        border: {
                            'background-color' : 'transparent',
                            'padding' : '0px'
                        },
                        title: {
                            'display' : 'none'
                        },
                        content: {
                            'padding' : '0px',
                            'width' : '815px',
                            'font-size': '12px'
                        }
                    });

                jQuery('#total-all').attr('innerHTML', sum_num_pack);
                jQuery('#el_gold_current').attr('innerHTML', gold_current);
                jQuery('#el_sum_num_gold').attr('innerHTML', sum_num_gold);
                if (gold_need_recharge > 0) {
                	jQuery('#el_gold_need').attr('innerHTML', str_gold_need);
                	jQuery('#button_gold_need').attr('innerHTML', button_gold_need);
                }
                if (shop.cart.conf.cart.payment_id == 'gold') {
                	var btnFinishGold = '<a href="javascript:void(0)" onclick="shop.cart.finishOrder()" class="blueButton  mLeft10" id="fr"><span><span>THANH TOÁN</span></span></a>';
                	var btnBack = '<a href="javascript:void(0)" onclick="shop.cart.stepTwo(true)" id="fr" class="blueButton"><span><span><b>&laquo;</b> QUAY LẠI</span></span></a>';
                	jQuery('#btnFinish').css('height', '30px');
                	if (gold_need_recharge > 0) {
                		jQuery('#btnFinish').attr('innerHTML', btnBack);
                	}
                	else {
                		jQuery('#btnFinish').attr('innerHTML', btnFinishGold + btnBack);
                	}
                }
            }
        });

        return false;
    },

    //Form nạp thẻ cào
    stepRecharge: function(recharge, card_val) {
        shop.show_overlay_popup('cart-recharge', 'Nạp thẻ',
            shop.cart.theme.recharge('cart-recharge', 'Nạp thẻ', recharge, card_val),
            {
                background: {
                    'background-color' : 'transparent'
                },
                border: {
                    'background-color' : 'transparent',
                    'padding' : '0px'
                },
                title: {
                    'display' : 'none'
                },
                content: {
                    'padding' : '0px',
                    'width' : '415px',
                    'font-size': '12px'
                }
            });
    },


    //Hiển thị lịch sử giỏ hàng
    historyCart : function() {
        de_active_sel();//IE6 selectoption
        jQuery.ajax({
            type: "POST",
            url:"ajax.php?act=payment&code=historyCart",
            //data: data,
            dataType: 'json',
            success: function(json) {
                shop.show_overlay_popup('cart-history', 'Các đơn hàng đã thanh toán',
                    shop.cart.theme.historyCartTemp('cart-history', 'Các đơn hàng đã thanh toán'),
                    {
                        background: {
                            'background-color' : 'transparent'
                        },
                        border: {
                            'background-color' : 'transparent',
                            'padding' : '0px'
                        },
                        title: {
                            'display' : 'none'
                        },
                        content: {
                            'padding' : '0px',
                            'width' : '815px',
                            'font-size': '12px'
                        }
                    });

                jQuery('#listItemHistory').attr('innerHTML', json.templates);
                //jQuery('#total-all').attr('innerHTML', sum_num_pack);
            }
        });

        return false;
    },

    viewHistoryCart : function(cart_code) {

        var data = "cart_code=" + cart_code;
        jQuery.ajax({
            type: "POST",
            url:"ajax.php?act=payment&code=viewCartHistory",
            data: data,
            dataType: 'json',
            success: function(json) {
                aryCartInfo = json.aryCartInfo;
                sum_money_cart = json.sum_money_cart;
                shop.show_overlay_popup('cart-history', 'Danh sách tin rao trong giỏ hàng ' + cart_code,
                    shop.cart.theme.viewHistoryCartTemp('cart-history', 'Danh sách tin rao trong giỏ hàng ' + cart_code),
                    {
                        background: {
                            'background-color' : 'transparent'
                        },
                        border: {
                            'background-color' : 'transparent',
                            'padding' : '0px'
                        },
                        title: {
                            'display' : 'none'
                        },
                        content: {
                            'padding' : '0px',
                            'width' : '815px',
                            'font-size': '12px'
                        }

                    });
            }
        });

        return false;
    },

//	--------------------------------- process cart -------------------------------- //

    processExtra:function(id) {
        var checked = false, extra = '';
        jQuery('.radio_extra').each(function() {
            if (this.checked) {
                checked = true;
                extra = this.title;
            }
        });
        if (checked) {
            shop.cart.doAddItem(id, extra);
        }
    },

    //Form xử lý khi click button tiếp tục tại màn hình chọn hình thức thanh toán
    processStepZero:function() {

        if (!jQuery('.paymentChooseType').hasClass('clicked')) {
            alert('Quý khách chưa chọn hình thức thanh toán');
            return;
        }
        var choose = jQuery('.clicked').attr('id');
        if (choose == 'atm' && shop.cart.conf.atm.bank == '') {
            alert('Quý khách chưa chọn ngân hàng để chuyển tiền vào');
            return;
        }
        shop.cart.conf.cart.payment_id = choose;

        if (shop.cart.conf.cart.payment_id == 'visa') {
            shop.cart.conf.cart.payment = 1;
        }
        else if (shop.cart.conf.cart.payment_id == 'mcard') {
            shop.cart.conf.cart.payment = 2;
            if (shop.cart.conf.customer.active == 0) {
                alert('Quý khách vui lòng kích hoạt Email trước khi nạp Gold');
                shop.hide_overlay_popup('cart-regulations');
                shop.customer.register.sendActiveEmail(shop.cart.conf.customer.email, 1);
                return;
            }
        } 
        else if (shop.cart.conf.cart.payment_id == 'gold') {
        	shop.cart.conf.cart.payment = 3;
        }
        else {
            shop.cart.conf.cart.payment = 0;
        }

        /*if(choose=="cop")
         {
         shop.cart.stepThree(); return;
         }*/

        shop.cart.stepOne();
    },


    input_info_press: function(e) {
        //ngannv dev press enter muc xu ly thong tin ca nhaan
        if (e.keyCode == 13 || e.which == 13) {
            return shop.cart.register();
        }
    },
    //Xử lý view thông tin cá nhân
    register:function() {
        var frm = document.cartRegisterForm, fname = '',tel = '',email = '',otp = '';
        user_info.fullname = frm.cart_fullname.value;
        user_info.mobile_phone = frm.cart_tel.value;
        user_info.email = frm.cart_email.value;

        if (shop.cart.conf.user.type == 'customer' && shop.cart.conf.userInfo == 1) {
            user_info.fullname = shop.cart.conf.customer.fullname;
            user_info.mobile_phone = shop.cart.conf.customer.mobile_phone;
            user_info.email = shop.cart.conf.customer.email;
        }
        else {
            if (frm.cart_fullname) {

                fname = shop.util_trim(frm.cart_fullname.value);
                if (fname == '') {
                    shop.error.set('#' + frm.cart_fullname.id, 'Bạn vui lòng nhập họ tên', 230, '.reg_cart_form');
                    return;
                }
                else if (fname.length < 3) {
                    shop.error.set('#' + frm.cart_fullname.id, 'Họ tên tối thiểu là 3 kí tự tối đa 30 ký tự', 240, '.reg_cart_form');
                    return;
                }
                else {
                    shop.error.close('#' + frm.cart_fullname.id, '.reg_cart_form');
                }
            }

            if (frm.cart_email) {
                email = shop.util_trim(frm.cart_email.value);
                if (email == '') {
                    shop.error.set('#' + frm.cart_email.id, 'Chưa nhập địa chỉ email', 230, '.reg_cart_form');
                    return;
                }
                else if (!shop.is_email(email)) {
                    shop.error.set('#' + frm.cart_email.id, 'Địa chỉ email không hợp lệ', 230, '.reg_cart_form');
                    return;
                }
                else {
                    shop.error.close('#' + frm.cart_email.id, '.reg_cart_form');

                }
            }

            if (frm.cart_tel) {
                tel = shop.util_trim(frm.cart_tel.value);
                if (tel == '') {
                    shop.error.set('#' + frm.cart_tel.id, 'Chưa nhập Số điện thoại', 230, '.reg_cart_form');
                    return;
                }
                else if (isNaN(tel)) {
                    shop.error.set('#' + frm.cart_tel.id, 'Điện thoại phải là số viết liền<br/>Không chứa ký tự đặc biệt', 230, '.reg_cart_form');
                    return;
                } else if (tel.length >= 15 || tel.length <= 8) {
                    shop.error.set('#' + frm.cart_tel.id, 'Điện thoại bạn nhập không đúng<br/>Độ dài phải >8 và <15 ký tự', 230, '.reg_cart_form');
                    return;
                }
                else {
                    shop.error.close('#' + frm.cart_tel.id, '.reg_cart_form');
                }
            }

            shop.cart.stepTwo();
        }
    },

    moreInfo:function(back) {
        if (shop.cart.conf.user.type == 'customer' && shop.cart.conf.userAddress == 1) {
            shop.cart.conf.user.address = shop.cart.conf.customer.address;
            shop.cart.conf.user.city = shop.cart.conf.customer.city;
            shop.cart.conf.user.district = shop.cart.conf.customer.district;
        }
        else {
            var frm = document.cartAddressForm, address = '', city = 0, district = '';
            if (frm.cart_address) {
                address = shop.util_trim(frm.cart_address.value);
                if (address == '') {
                    shop.error.set('#' + frm.cart_address.id, 'Chưa nhập Số nhà, Đường/Phố, Phường/Xã', 320, '.cartMoreAddress');
                    return;
                } else if (address.length < 10) {
                    shop.error.set('#' + frm.cart_address.id, 'Vui lòng nhập chi tiết hơn', 320, '.cartMoreAddress');
                    return;
                } else {
                    shop.error.close('#' + frm.cart_address.id, '.cartMoreAddress');
                }
            }
            if (frm.district) {
                district = shop.util_trim(frm.district.value);
                if (district == '') {
                    shop.error.set('#' + frm.district.id, 'Chưa nhập Quận/Huyện', 320, '.cartMoreAddress');
                    return;
                } else {
                    shop.error.close('#' + frm.district.id, '.cartMoreAddress');
                }
            }
            if (frm.cart_city) {
                city = parseInt(frm.cart_city.value);
                if (city <= 0) {
                    shop.error.set('#' + frm.cart_city.id, 'Chưa chọn tỉnh thành', 320, '.cartMoreAddress');
                    return;
                } else {
                    shop.error.close('#' + frm.cart_city.id, '.cartMoreAddress');
                }
            }
            shop.cart.conf.user.address = address;
            shop.cart.conf.user.city = city;
            shop.cart.conf.user.district = district;
            shop.cart.conf.user.note = shop.util_trim(frm.cart_note.value);
        }
        shop.cart.guest.save(shop.cart.conf.user);
        shop.cart.stepThree();
    },

    //Kết thúc thanh toán
    finishOrder: function() {

        if (!shop.get_ele('check-regulations').checked) {
            alert('Quý khách chưa tích vào mục đã đọc và đồng ý các điều khoản và quy định của RồngBay.com');
            return;
        }

        var data = "email_pay=" + user_info.email;
        data += "&fullname=" + user_info.fullname;
        data += "&mobile=" + user_info.mobile_phone;
        data += "&payment_type=" + shop.cart.conf.cart.payment_id;
        data += "&sum_money_cart=" + sum_money_cart;

        jQuery.ajax({
            type: "POST",
            url:"ajax.php?act=payment&code=saveOrder",
            data: data,
            dataType: 'json',
            success: function(result) {
                if (!result.errors || result.errors == "") {
                    cartId = result.cartId;
                    cart_code = result.cart_code;
                    //Trường hợp chọn thanh toán bằng sms thì đóng overlay và không thực hiện gì cả
                    if (shop.cart.conf.cart.payment_id == 'cop') {
                        if (typeAlert == 1)
                            window.location = WEB_DIR + "item.html";
                        else if (typeAlert == 2)
                            window.location = WEB_DIR + "?page=detail&ad_id=" + item_id;

                        shop.hide_overlay_popup('cart-confirm');
                    }

                    //Trường hợp chọn thanh toán bằng chuyển khoản thì đóng overlay và không thực hiện gì cả
                    if (shop.cart.conf.cart.payment_id == 'atm') {
                        if (typeAlert == 1)
                            window.location = WEB_DIR + "item.html";
                        else if (typeAlert == 2)
                            window.location = WEB_DIR + "?page=detail&ad_id=" + item_id;

                        shop.hide_overlay_popup('cart-confirm');
                    }

                    //Trường hợp chọn thanh toán bằng nạp thẻ cào
                    if (shop.cart.conf.cart.payment_id == 'mcard') {
                        shop.cart.stepRecharge();
                        document.getElementById('r_mobifone').focus();
                    }

                    else if (shop.cart.conf.cart.payment_id == 'visa') {
                        var data = "email_pay=" + user_info.email;
                        data += "&fullname=" + user_info.fullname;
                        data += "&mobile=" + user_info.mobile_phone;
                        data += "&sum_money_cart=" + sum_money_cart;
                        data += "&cartId=" + cartId;
                        data += "&cart_code=" + cart_code;

                        jQuery.ajax({
                            type: "POST",
                            url:"ajax.php?act=payment&code=payment_cart",
                            data: data,
                            dataType: 'json',
                            success: function(json) {
                                window.location = json.url;
                            }
                        });
                        return false;
                    }
                    else if (shop.cart.conf.cart.payment_id == 'gold') {
                        shop.cart.finishPaymentByGold();
                        return;
                    }
                }
                else {
                    alert(result.errors);
                }
            }
        });
        return false;
    },
    
    //Hoàn thành thanh toán bằng gold
    finishPaymentByGold: function() {
    	var data = "email_pay=" + user_info.email;
            data += "&fullname=" + user_info.fullname;
            data += "&mobile=" + user_info.mobile_phone;
            data += "&sum_money_cart=" + sum_money_cart;
            data += "&cartId=" + cartId;
            data += "&cart_code=" + cart_code;

            jQuery.ajax({
                type: "POST",
                url:"ajax.php?act=payment&code=payment_gold_cart",
                data: data,
                dataType: 'json',
                success: function(data) {
                    if(data.msg == 'not_login')
					{			
						alert("Hãy đăng nhập trước khi sử dụng chức năng này")
						return false;
					}
					else if(data.msg == 'no_perm')
					{			
						alert('Bạn không có quyền thực hiện chức năng này');
						return false;
					}
					else if(data.msg == 'error')
					{			
						alert('Có lỗi trong quá trình thanh toán giỏ hàng, mời bạn thử lại sau.');
						
						window.location.reload();
						return false;
					}
					else if(data.msg == 'payed')
					{			
						alert('Giỏ hàng có ID '+ data.cart_id +' này đã được thanh toán rồi, bạn không thể thanh toán giỏ hàng này nữa!');
						
						window.location.reload();
						return false;
					}
					else if(data.msg == 'over_price')
					{			
						alert('Số Gold trong tài khoản của quý khách là ' + number_format(data.gold_user) + ' Gold, không đủ để thanh toán giỏ hàng có ID ' +data.cart_id+ ' này!');
						
						window.location.reload();
						return false;
					}
					else if(data.msg != '')//Error
					{	
						alert(data.msg);	
					}	
					else//Succes
					{			
						pay_cancel();
						
						alert("Bạn đã thanh toán thành công giỏ hàng có ID "+ data.cart_id +", số Gold bị trừ vào tài khoản " +data.user_name+ " là " + number_format(data.gold_used) + " Gold!\nTài khoản của bạn còn: " + number_format(data.gold_user) + " Gold\n\nCám ơn bạn đã sử dụng dịch vụ của RồngBay!");
						
						window.location.reload();
					}
                }
            });
            return false;
    },
    
    cart_recharge_press:function(e) {
        //ngannv dev chức năng press enter trong mục nhập mã số điện thoại
        if (e.keyCode == 13 || e.which == 13) {
            return shop.cart.recharge();
        }
    },
    //Xử lý thẻ cào điện thoại
    recharge : function() {

        if (!shop.is_exists(shop._store.variable['recharge_start'])) {
            shop._store.variable['recharge_start'] = false;
        }

        if (!shop._store.variable['recharge_start']) {
            var frm = document.cartRechargeForm, code = '', card_type = '';
            if (frm.cart_recharge) {
                if (!shop.get_ele('r_vinaphone').checked && !shop.get_ele('r_mobifone').checked && !shop.get_ele('r_viettel').checked && !shop.get_ele('r_vcoin').checked) {
                    shop.error.set('', 'Chưa chọn loại thẻ cào', 340, '.cartRecharge');
                    return false;
                }
                else {
                    card_type = shop.get_ele('r_vinaphone').checked ? 'vinaphone' : 'mobifone';
                    
                    if (jQuery('#r_vinaphone').is(":checked")) card_type = 'vinaphone';
					else if (jQuery('#r_mobifone').is(":checked")) card_type = 'mobifone';
					else if (jQuery('#r_viettel').is(":checked")) card_type = 'viettel';
					else if (jQuery('#r_vcoin').is(":checked")) card_type = 'vcoin';
					
                    shop.error.close('', '.cartRecharge');
                }
                code = shop.util_trim(frm.cart_recharge.value);
                seri = shop.util_trim(frm.cart_seri.value);
                
                //if ((card_type == 'viettel' || card_type == 'vcoin') && seri == '')
                if (seri == '')
				{
					shop.error.set('#' + frm.cart_seri.id, 'Bạn chưa nhập số seri của thẻ cào', 340, '.cartRecharge');
                    return false;
				}

                if (code == '') {
                    shop.error.set('#' + frm.cart_recharge.id, 'Chưa nhập mã số thẻ cào', 340, '.cartRecharge');
                    return false;
                }
                else if (code.length < 12) {
                    shop.error.set('#' + frm.cart_recharge.id, 'Mã số thẻ không hợp lệ', 340, '.cartRecharge');
                    return false;
                }
                else {
                    shop.error.close('#' + frm.cart_recharge.id, '.cartRecharge');
                }

                var data = "email_pay=" + user_info.email;
                data += "&fullname=" + user_info.fullname;
                data += "&mobile=" + user_info.mobile_phone;
                data += "&sum_money_cart=" + sum_money_cart;
                data += "&card_type=" + card_type;
                data += "&card_code=" + code;
                data += "&card_seri=" + seri;
                data += "&cart_code=" + cart_code;
                data += "&cartId=" + cartId;

                var strBtn = ('<a href="javascript:void(0)" class="blueButton  mLeft10" id="fr"><span><span>NẠP THẺ <b>&raquo;</b></span></span></a>');
                jQuery('#close').attr('innerHTML', strBtn);
                jQuery('#loading_pay').show();

                jQuery.ajax({
                    type: "POST",
                    url:"ajax.php?act=payment&code=card_payment",
                    data: data,
                    dataType: 'json',
                    success: function(json) {
                        jQuery('#loading_pay').hide();
                        //Chưa nạp đủ tiền
                        if (json.isOk == 1) {
                            var money_less = json.sum_money_cart - json.total_price;
                            var note = "Quý khách cần nạp thêm <strong>" + shop.cart.theme.numberFormat(money_less) + " VNĐ</strong>";
                            var strContent2 = '<div align="left">'
                                + '<div id="pTop5" class="newCustomerInfo mTop5">'
                                + '<div style="margin-left:30px" class="card_type">'
                                + 'Quý khách vừa nạp thành công thẻ:<strong>' + shop.cart.theme.numberFormat(json.price) + ' VNĐ</strong>.<br/>' + note
                                + '</div>'
                                + '</div>'
                                + '</div>';

                            var strContent1 = 'Tổng số tiền Quý khách đã nạp:<strong>' + shop.cart.theme.numberFormat(json.total_price) + ' VNĐ</strong>';
                            //var strContent2 ='Quý khách vừa nạp thành công thẻ:<strong>'+shop.cart.theme.numberFormat(json.price) +' VNĐ</strong>.<br/>'+note;

                            jQuery('#msg_cart').attr('innerHTML', strContent1);
                            jQuery('#complete').attr('innerHTML', strContent2);


                            var strBtn = ('<a href="javascript:void(0)" onclick="shop.cart.recharge()" class="blueButton  mLeft10" id="fr"><span><span>NẠP THẺ <b>&raquo;</b></span></span></a>');
                            jQuery('#close').attr('innerHTML', strBtn);
                            //1.1
                        }
                        //Đã nạp đủ
                        else if (json.isOk == 2) {
                            var sub = '';
                            if (json.sub_price > 0) {
                                sub = "- Số tiền dư : " + shop.cart.theme.numberFormat(json.sub_price) + ' sẽ được cộng tiếp vào đơn hàng này của Quý khách !';
                            }
                            alert("- Quý khách đã nạp đủ số tiền, cảm ơn Quý khách đã sử dụng dịch vụ của chúng tôi\n" + sub);
                            //shop.hide_overlay_popup('cart-recharge');
                            if(json.validate)
                                alert("Tin rao của bạn có từ nhạy cảm cần kiểm duyệt! Nếu hợp lệ tin của bạn sẽ được đăng trong thời gian sớm nhất!\n");
                            
                            if (typeAlert == 1) window.location = WEB_DIR + "?page=item";
                            else if (typeAlert == 2) window.location = WEB_DIR + "?page=detail&ad_id=" + item_id;
                            else {
                            	location.reload();
                            }
                        }
                        //Lỗi nạp thẻ
                        else {
                            if (json.locked) {
								alert(json.errors);
								location.reload();
							} 
							else {
	                        	alert(json.errors);
	                            var strBtn = ('<a href="javascript:void(0)" onclick="shop.cart.recharge()" class="blueButton  mLeft10" id="fr"><span><span>NẠP THẺ <b>&raquo;</b></span></span></a>');
	                            jQuery('#close').attr('innerHTML', strBtn);
							}
                        }
                    }
                });
            }
        }
        return false;
    },
    
    //Mua lượt up bằng gold
    buyUpItem : function(packId, des) 
    {
		if (packId == null) 
		{
			alert("Chưa chọn gói thanh toán");
			return;
		}
      	if (!confirm("Bạn có chắc chắn chọn mua gói ["+des+"] ?")) 
      	{
      		return;
      	}
        var data = "packId=" + packId;
       
        jQuery.ajax({
            type: "POST",
            url:"ajax.php?act=payment&code=buy_up_item",
            data: data,
            dataType: 'json',
            success: function(json) 
            {
                if (json.msg == '') 
                {
                	alert("Bạn vừa mua "+number_format(json.gold_used)+" Gold cho gói "+number_format(json.num_up)+" lượt đăng tin. \nTài khoản còn lại của bạn là "+ number_format(json.gold_user)+" Gold")
                	location.reload();
                }
                else 
                {
                	alert(json.msg)
                }
            }
        });
    },

    finishSubmit:function(post) {

        shop.ajax_popup('act=cart&code=finish', "POST", post,
            function(j) {
                if (j.err == 0) {
                    shop.cart.conf.cart.payment == 2
                    switch (post.paymentType) {
                        case 0:
                            shop.cookie.set('guest_otp', '');
                            shop.redirect(j.url);
                            break;
                        case 1:
                            shop.cart.conf.cart = j;
                            jQuery('body').append(shop.cart.theme.paymentViSa());
                            jQuery('#checkoutSoHa').submit();
                            break;
                        case 2:
                            if (shop.is_exists(j.more_gold)) {
                                shop.cart.conf.card_post = post;
                                shop.cart.conf.customer.gold = j.gold;
                                shop.cart.conf.customer.more_gold = j.more_gold;
                                shop.cart.conf.cart.total = j.total;
                                shop.cart.stepRecharge();
                            } else {
                                shop.redirect(j.url);
                            }
                            break;
                    }
                } else {
                    switch (j.msg) {
                        case 'otp_expired':
                            j.msg = 'Mật khẩu đã hết hạn hoặc không đúng';
                            break;
                        case 'invalid_min':
                            j.msg = 'Bạn phải mua tối thiểu ' + shop.cart.conf.cart.cart.min_order + ' sản phẩm';
                            break;
                        case 'invalid_quantity':
                            j.msg = 'Sản phẩm đã bán hết';
                            if (j.quantity > 0) {
                                j.msg = 'Chỉ còn ' + j.quantity + ' sản phẩm';
                            }
                            break;
                        case 'cus_not_found':
                            j.msg = 'Hiện tại bạn đang không đăng nhập.<br />Vui lòng tắt cửa sổ, mua lại';
                            break;
                    }
                    shop.show_popup_message(j.msg, 'Thông báo lỗi', -1);
                }
            });
    },

//	--------------------------------- cart theme -------------------------------- //

    theme:{
        extra:function(id, title, item_id, extra) {
            if (extra && shop.is_exists(extra.opts)) {
                var extra_html = '';//'<div>'+extra.title+'</div>';
                for (var i = 0; i < extra.opts.length; i++) {
                    extra_html += '<div class="mTop10"><input type="radio" class="radio_extra" name="extra" id="extra' + i + '" title="' + extra.opts[i] + '" /> <label for="extra' + i + '">' + extra.opts[i] + '</label></div>';
                }
                return shop.popupSite(id, title, shop.join
                    ('<div class="content" style="padding:20px">')
                    ('<div id="cError"></div>')
                    ('<div>' + extra_html + '</div>')
                    ('<div align="center" class="mTop15">')
                    ('<a href="javascript:void(0)" onclick="shop.cart.processExtra(' + item_id + ')" class="blueButton"><span><span>TIẾP TỤC <b>&raquo;</b></span></span></a>')
                    ('<div class="c"></div>')
                    ('</div>')
                    ('</div>')());
            }
            return '';
        },

        choipackage:function() {
            de_active_sel();//ngannv-fix for ie 6

            var pagkage = '';
            var num_sms = 0;
            for (i in itemPackage) {
                num_sms = itemPackage[i]['sms'] / 15000;
                pagkage += ('<tr>');
                pagkage += ('<td align="center" class="td_border_basic">' + itemPackage[i]['num_up'] + ' lượt đăng lại tin này</td>');
                pagkage += ('<td align="center" class="td_border_basic">' + number_format(itemPackage[i]['transfer']) + 'đ</td>');
                pagkage += ('<td align="center" class="td_border_basic">' + number_format(itemPackage[i]['sms']) + '/' + num_sms + 'sms</td>');
                pagkage += ('<td align="center" class="td_border_basic">' + number_format(itemPackage[i]['card']) + 'đ</td>');
                pagkage += ('<td class="td_border_basic" style="text-align:center; padding:4px; border-right:0">');
                pagkage += ('<a href="javascript:void(0)" onclick="shop.cart.frmViewCart(' + item_id + ',' + i + ')">');
                pagkage += ('<span class="chonmua_def" title="Chọn mua"></span></a>');
                pagkage += ('</td></tr>');

            }

            var strTitle = ('<div style="border:1px solid #fecec0; background:#fbffc0; color:#333;padding:10px; margin:10px 0; text-align:center">');
            var strBtnCancel = "";
            if (typeAlert == 1) 
            {
                strTitle += ('&nbsp;&nbsp;&nbsp;Bạn phải thanh toán cho tin này thì tin mới được đăng.')
                strBtnCancel = ('<div align="center" style="margin-left:300px;margin-top:5px;margin-bottom:5px"><a class="blueButton" id="huy_btn" href="'+WEB_DIR+'item.html"><span><span>TIẾP TỤC ĐĂNG TIN</span></span></a></div>');
            } 
            else if (typeAlert == 2) 
            {
                strTitle += ('<div style="margin-bottom:15px"><font style="font-weight:bold;font-size:14px; color:#f47a00; margin-bottom:5px">Bạn đã đăng tin thành công trên Rongbay.com </font></div>')
                
                strBtnCancel = ('<div align="center" style="margin-left:300px;margin-top:5px;margin-bottom:5px"><a class="blueButton" id="huy_btn" onclick="shop.hide_overlay_popup(\'cart-regulations\');" href="javascript:void(0)"><span><span>HỦY BỎ</span></span></a></div>');
            }
            strTitle += ('<b>Soạn tin: RBD <font color="red">' + item_id + '</font></b> gửi <b><font>8701</font></b> để tin được đăng lại 15 lần lên <b>trang 1</b> <font color="red"><b>(15.000VNĐ/sms)</b></font>')
            strTitle += ('</div>')
            return shop.join
                (' <div class="classic-popup"><div class="classic-popup-top"><div class="right"><div class="bg"></div></div></div><div class="classic-popup-main"><div class="classic-popup-title clearfix"><div class="fl">Mua lượt đăng lại</div>' + (typeAlert != 2 ? '<a onclick="shop.hide_overlay_popup(\'cart-regulations\');" title="Đóng" class="classic-popup-close" href="javascript:void(0)">X</a>' : '') + '<div class="c"></div></div><div class="classic-popup-content clearfix"><div style="padding: 10px;*padding: 10px;" class="content">')

                ('<div id="box-gradien2"><div class="hd_bg">')
                ('</div>')
                ('<div id="pTop5" class="content" style="padding:0px;">')
                ('<table cellspacing="0" cellpadding="0" width="100%" class="cart_finish">')
                ('<thead><tr>')
                ('<th class="head_cart">Tiêu đề tin</th>')
                ('<th width="179" class="head_cart">Chuyên mục</th>')
                ('<th width="130" class="head_cart">Mã tin</th>')
                ('</tr></thead>')
                ('<tbody><tr>')
                ('<td valign="top" class="item_cart" align="left" >' + ad_title + '</td>')
                ('<td align="center" valign="top" class="item_cart">' + catName + '</td>')
                ('<td align="center"  valign="top" class="item_cart">' + item_id + '</td>')
                ('</tr></tbody>')
                ('</table>')

                ('</div></div>'  + strTitle)
                ('<div style="margin:15px 0px 10px 0px; color:#333"><b>Hoặc mua nhiều hơn lượt đăng lại bằng cách dưới đây: </b></div><table cellspacing="0" cellpadding="0" class="stats">')
                ('<tbody><tr class="">')
                (' <td class="hed">')
                ('Lượt đăng lại')
                ('</td>')
                (' <td class="hed">')
                (' ')
                ('Chuyển khoản')
                ('</td>')
                ('<td class="hed">SMS</td>')
                ('<td class="hed" width="84px">Thẻ cào</td>')
                (' <td class="hed" style="text-align:center; padding:4px; border-right:0">Mua</td>')
                ('</tr>')
                ('' + pagkage + '')
                ('<tr><td colspan="5" class="td_footer" style="border-right:0; border-bottom:0; height:4px"></td></tr>')
                ('</tbody></table>')
                ('<div class="question_ft"> &nbsp;<a href="http://blog.rongbay.com/2011/03/08/t%E1%BB%B1-d%E1%BB%99ng-dang-l%E1%BA%A1i-tin/" target="_blank" style="color:#5d5d5d; font-size:11px;">Tại sao phải mua lượt đăng lại? </a></div><div class="c"></div>')
                ('' + strBtnCancel + '')
                ('<div class="c"></div></div></div></div><div class="classic-popup-bottom"><div class="right"><div class="bg"></div></div></div>')
                ('</div>')();


        },


        //Hiển thị form danh sách tin rao
        viewCart : function(id, title) {
            return shop.join
                (' <div class="classic-popup"><div class="classic-popup-top"><div class="right"><div class="bg"></div></div></div><div class="classic-popup-main"><div class="classic-popup-title clearfix"><div class="fl">Thông tin giỏ hàng</div><a onclick="shop.hide_overlay_popup(\'cart-regulations\');" href="javascript:void(0)" title="Đóng" class="classic-popup-close" >X</a><div class="c"></div></div><div class="classic-popup-content clearfix"><div style="padding: 10px 0px;*padding: 10px;" class="content">')
                ('<div class="box-gradien mTop10" id="box-gradien2">')
                ('<div class="title mTop10 mLeft10">Danh sách tin rao </div>')
                ('<div class="content" style="padding-right:12px;max-height:400px;overflow: auto;" id="listItemChoiceCart">')
                ('</div>')
                ('</div>')
                ('<div class="content cartMoreAddress" style="padding:10px 20px;">')
                ('<form name="cartAddressForm" id="cartAddressForm">')
                ('<div align="center" class="mTop10" style="_padding:10px">')
                ('<a href="javascript:void(0)" onclick="shop.cart.stepZero()" class="blueButton  mLeft10" id="fr"><span><span>TRẢ TIỀN <b>&raquo;</b></span></span></a>')
                ('<a onclick="shop.hide_overlay_popup(\'cart-regulations\');" href="javascript:void(0)" id="fr" class="blueButton" style="margin-left:10px"><span><span>ĐÓNG LẠI</span></span></a>')
                ('<div class="c"></div>')
                ('</div>')
                ('</form>')
                ('</div>')();
        },

        regulations:function(id, title) {
            var type = shop.is_exists(shop.cart.conf.cart.payment_id) ? shop.cart.conf.cart.payment_id : '',
                notActive = '<div class="notActive"></div>',
                visaCard = shop.join
                    ('<div class="paymentChooseType sendOnline' + (type == 'visa' ? ' pay_active clicked' : '') + '" id="visa">')
                    ('<div class="arrowRight">')
                    ('<div class="radioBox"><input type="radio" name="radio_pay" id="radio_visa" value="visa" ' + (type == 'visa' ? 'checked' : '') + ' /></div>')
                    ('<div class="paymentContent">')
                    ('<div class="paymentTitle">Thanh toán online dùng Visa, Master Card, thẻ ATM, tài khoản có Internet Banking</div>')
                    ('<div class="paymentText">Thanh toán nhanh gọn và có thể mua hàng hoặc sử dụng ngay dịch vụ sau khi thanh toán.</div>')
                    ('<div class="creditPay bankPay">')
	                    ('<span id="visa"></span>')
						('<span id="master"></span>')
						('<a class="fl" href="javascript:void(0)"><span id="vcb"></span></a>')
						('<a class="fl" href="javascript:void(0)"><span id="donga"></span></a>')
						('<a class="fl" href="javascript:void(0)"><span id="techcom"></span></a>')
						('<a class="fl" href="javascript:void(0)"><span id="vietin"></span></a>')
						('<a class="bank_more_link" href="javascript:void(0)" onclick="shop.cart.showOnlineBank(this)">[ Thêm... ]</a>')
						('<div class="c"></div>')
						('<div class="view_more_bank hidden mTop15">')
							('<a class="fl" href="javascript:void(0)"><span id="hd"></span></a>')
							('<a class="fl" href="javascript:void(0)"><span id="vib"></span></a>')
							('<a class="fl" href="javascript:void(0)"><span id="tp"></span></a>')
							('<a class="fl" href="javascript:void(0)"><span id="shb"></span></a>')
							('<a class="fl" href="javascript:void(0)"><span id="exim"></span></a>')
							('<a class="fl" href="javascript:void(0)"><span id="maritime"></span></a>')
							('<div class="c"></div>')
						('</div>')
						('<div class="view_more_bank hidden mTop15">')
							('<a class="fl" href="javascript:void(0)"><span id="vieta"></span></a>')
							('<a class="fl" href="javascript:void(0)"><span id="sacom"></span></a>')
							('<div class="c"></div>')
						('</div>')
	                ('</div>')
                    ('</div>')
                    ('<div class="c"></div> ')
                    ('<ul class="paymentText" id="paymentTextFix">')
                    ('<li>Không mất phí thanh toán</li>')
                    ('<li>Thẻ của Quý khách phải được kích hoạt chức năng thanh toán trực tuyến hoặc đã đăng ký Internet Banking</li>')
                    ('<li>Thanh toán nhanh gọn và có thể sử dụng dịch vụ ngay sau khi thanh toán.</li>')
                    ('</ul>')
                    ('</div>')
                    ('</div>')(),
                mcard = shop.join
                    ('<div class="paymentChooseType sendGold' + (type == 'mcard' ? ' pay_active clicked' : '') + '" id="mcard">')
                    ('<div class="arrowRight">')
                    ('<div class="radioBox"><input type="radio" name="radio_pay" id="radio_mcard" value="mcard" ' + (type == 'mcard' ? 'checked' : '') + ' /></div>')
                    ('<div class="paymentContent" style="*height:50px">')
                    ('<div class="paymentTitle">Thanh toán bằng thẻ cào điện thoại và thẻ Game</div>')
                    ('<div class="bankPay">')
                    ('<a class="fl" href="javascript:void(0)"><span id="mobiphone"></span></a>')
                    ('<a class="fl" href="javascript:void(0)"><span id="vinaphone"></span></a>')
                    ('<a class="fl" href="javascript:void(0)"><span id="viettel"></span></a>')
                    ('<a class="fl" href="javascript:void(0)"><span id="vcoin"></span></a>')
                    ('<div class="c"></div>')
                    ('</div>')
                    ('<div class="c"></div>')
                    ('</div>')
                    ('<div class="c"></div>')

                    ('</div>')
                    ('</div>')(),
                gold = shop.join
                    ('<div class="paymentChooseType sendGold' + (type == 'gold' ? ' pay_active clicked' : '') + '" id="gold">')
                    ('<div class="arrowRight">')
                    ('<div class="radioBox"><input type="radio" name="radio_pay" id="radio_gold" value="gold" ' + (type == 'gold' ? 'checked' : '') + ' /></div>')
                    ('<div class="paymentContent" style="*height:50px">')
                    ('<div class="paymentTitle">Thanh toán bằng tài khoản gold</div>')
                    ('<div class="bankPay">')
                    ('<ul class="paymentText" style="padding-left:15px">')
                    ('<li>Dùng gold trong tài khoản để thanh toán. Quý khách có thể <span style="color:#105BB6; text-decoration:none" onclick="pay_more_gold('+sum_money_cart+');"><b>nạp gold</b></span> vào tài khoản để thanh toán được nhanh chóng và dễ dàng hơn.</li>')
                    ('</ul>')
                    ('<div class="c"></div>')
                    ('</div>')
                    ('<div class="c"></div>')
                    ('</div>')
                    ('<div class="c"></div>')
                    ('</div>')
                    ('</div>')(),
                cop = shop.join
                    ('<div class="paymentChooseType sendCop' + (type == 'cop' ? ' pay_active clicked' : '') + (shop.cart.isCOP() ? '' : ' copNoActive') + '" id="cop">')
                    ('<div class="arrowRight">')
                    ('<div class="radioBox"><input type="radio" name="radio_pay" id="radio_cop" value="cop" ' + (type == 'cop' ? 'checked' : '') + ' /></div>')
                    ('<div class="paymentContent">')
                    ('<div class="paymentTitle">Thanh toán bằng SMS  </div>')
                    ('<ul class="paymentText" style="padding-left:15px">')
                    ('<li>Chấp nhận các số điện thoại di động của các mạng: Vina, Mobi, Viettel, Beeline, Vietnammobile và Sfone.</li>')
                    ('<li>Mỗi SMS bị trừ 15.000 đồng.</li>')
                    ('<li>Mỗi SMS sẽ nhận được tin nhắn trả về.</li>')
                    ('</ul>')
                    ('</div>')
                    ('<div class="c"></div>')
                    ('</div>')
                    ('</div>')(),

                coo = shop.join
                    ('<div class="paymentChooseType sendCoo' + (type == 'coo' ? ' pay_active clicked' : '') + (shop.cart.isCOO() ? '' : ' cooNoActive') + '" id="coo">')
                    ('<div class="arrowRight">')
                    ('<div class="radioBox"><input type="radio" name="radio_pay" id="radio_coo" value="coo" ' + (type == 'coo' ? 'checked' : '') + ' /></div>')
                    ('<div class="paymentContent">')
                    ('<div class="paymentTitle">Mua hàng tại VP Rongbay.com <span>(' + (shop.cart.conf.shipping.feeCOD > 0 ? ('Mất thêm phí ' + shop.cart.conf.shipping.feeCOD_f + '/' + shop.cart.conf.cart.cart.unit) : 'Có phí') + ')</span></div>')
                    ('<div class="paymentText">Thanh toán và nhận hàng tại Văn phòng của Rongbay.com trong giờ hành chính (9h:00 - 18h:00 từ thứ 2 đến thứ 7)</div>')
                    ('</div>')
                    ('<div class="c"></div>')
                    ('<ul class="paymentText paymentGuide">')
                    ('<li>Sau khi đặt hàng trên Rongbay.com, Quý khách phải đến văn phòng của Rongbay.com tại địa phương để nhận hàng và thanh toán tiền trực tiếp cho Rongbay.com.</li>')
                    ('<li>Sau thời hạn quy định, Quý khách không đến nhận hàng, coi như đơn hàng sẽ bị hủy.</li>')
                    ('</ul>')
                    ('</div>')
                    ('</div>')(),
                bank = shop.join
                    ('<div class="bank' + (shop.cart.conf.cart.payment_id == 'atm' ? '' : ' hidden') + '">')
                    ('<div class="bank_title">Chọn ngân hàng của Rongbay.com mà Quý khách sẽ chuyển tiền vào:</div>')
                    ('<div class="bank_info">')
                    ('<div class="bank_detail"></div>')
                    ('<div>')
                    ('<a href="javascript:void(0)" onclick="shop.cart.listBank()" class="bank_go">Chọn ngân hàng khác</a>')
                    ('<div class="c"></div>')
                    ('</div>')
                    ('</div>')
                    ('<div class="bank_list">')
                    ('<a href="javascript:void(0)" onclick="shop.cart.chooseBank(this, \'vc_bank\')" class="fl' + (shop.cart.conf.atm.bank == 'vc_bank' ? ' active' : '') + '"><span id="vcb"></span></a>')
                    ('<a href="javascript:void(0)" onclick="shop.cart.chooseBank(this, \'donga_bank\')" class="fl' + (shop.cart.conf.atm.bank == 'donga_bank' ? ' active' : '') + '"><span id="donga"></span></a>')
                    ('<a href="javascript:void(0)" onclick="shop.cart.chooseBank(this, \'techcom_bank\')" class="fl' + (shop.cart.conf.atm.bank == 'techcom_bank' ? ' active' : '') + '"><span id="techcom"></span></a>')
                    ('<a href="javascript:void(0)" onclick="shop.cart.chooseBank(this, \'agribank\')" class="fl' + (shop.cart.conf.atm.bank == 'agribank' ? ' active' : '') + '"><span id="agri"></span></a>')
                    ('<a href="javascript:void(0)" onclick="shop.cart.chooseBank(this, \'bidv_bank\')" class="fl' + (shop.cart.conf.atm.bank == 'bidv_bank' ? ' active' : '') + '"><span id="bidv"></span></a>')
                    ('<a href="javascript:void(0)" onclick="shop.cart.chooseBank(this, \'vietinbank\')" class="fl' + (shop.cart.conf.atm.bank == 'vietinbank' ? ' active' : '') + '"><span id="vietin"></span></a>')
                    ('<a href="javascript:void(0)" onclick="shop.cart.chooseBank(this, \'mb_bank\')" class="fl' + (shop.cart.conf.atm.bank == 'mb_bank' ? ' active' : '') + '"><span id="mb"></span></a>')
                    ('<a href="javascript:void(0)" onclick="shop.cart.chooseBank(this, \'acb_bank\')" class="fl' + (shop.cart.conf.atm.bank == 'acb_bank' ? ' active' : '') + '"><span id="acb"></span></a>')
                    ('<a href="javascript:void(0)" onclick="shop.cart.chooseBank(this, \'vib_bank\')" class="fl' + (shop.cart.conf.atm.bank == 'vib_bank' ? ' active' : '') + '"><span id="vib"></span></a>')
                    ('<div class="c"></div>')
                    ('</div>')
                    ('</div>')(),
                atm = shop.join
                    ('<div class="paymentChooseType sendAtm' + (type == 'atm' ? ' pay_active clicked' : '') + (shop.cart.showPaymentMoney() ? '' : ' atmNoActive') + '" id="atm">')
                    ('<div class="arrowRight">')
                    ('<div class="radioBox"><input type="radio" name="radio_pay" id="radio_atm" value="atm" ' + (type == 'atm' ? 'checked' : '') + ' /></div>')
                    ('<div class="paymentContent">')
                    ('<div class="paymentTitle">Chuyển khoản <span>(Quý khách tự thanh toán chi phí chuyển khoản)</span></div>')
                    ('<div class="paymentText">Quý khách chuyển tiền vào tài khoản của Rongbay.com. Quý khách phải chờ từ <b style="color:#5b5b5b">4-24</b> giờ để Rongbay.com xác nhận giao dịch.</div>')
                    ('</div>')
                    ('<div class="c"></div>' + bank)
                    ('<ul class="paymentText paymentGuide">')
                    ('<li>Khi chuyển khoản qua Internet Banking hoặc Quầy giao dịch, Quý khách vui lòng tự chịu phí chuyển khoản.</li>')
                    ('<li>Sau khi chuyển khoản, Quý khách vui lòng thông báo cho RồngBay được biết qua địa chỉ mail: linhngothuy@enbac.com hoặc điện thoại: 04.3632.1221 máy lẻ 227</li>')
                    ('<li>Gói được chấp nhận chỉ khi tiền đã về tài khoản của Rongbay.com</li>')
                    ('</ul>')
                    ('</div>')
                    ('</div>')(),
                payment = visaCard + mcard;
                
            if (user_id > 0) payment += gold;
            
            //payment += cod;
            payment += cop;
            payment += atm;

            return shop.join
                (' <div class="classic-popup"><div class="classic-popup-top"><div class="right"><div class="bg"></div></div></div><div class="classic-popup-main"><div class="classic-popup-title clearfix"><div class="fl">Chọn hình thức thanh toán</div><a onclick="shop.hide_overlay_popup(\'cart-regulations\');" href="javascript:void(0)" title="Đóng" class="classic-popup-close" >X</a><div class="c"></div></div><div class="classic-popup-content clearfix"><div style="padding: 0px;" class="content">')
                ('<div class="content" style="padding:0 0 10px">' + payment)
                ('<div class="c"></div>')
                ('<div align="center" class="mRight20">')
                ('<div class="mTop10">')
                ('<a href="javascript:void(0)" onclick="shop.cart.processStepZero()" class="blueButton mLeft10" id="fr"><span><span>TIẾP TỤC <b>&raquo;</b></span></span></a>')

                (!flgCart ?
                    '<a class="blueButton" id="fr" onclick="shop.cart.frmViewCart(' + item_id + ',' + choicePackage + ')" href="javascript:void(0)"><span><span><b>«</b> QUAY LẠI</span></span></a>'
                    :
                    '<a class="blueButton" id="fr" onclick="shop.cart.frmViewCart(' + item_id + ',' + choicePackage + ', 1)" href="javascript:void(0)"><span><span><b>«</b> QUAY LẠI</span></span></a>')

                ('<div class="c"></div>')
                ('</div>')
                ('</div>')
                ('</div>')();
        },

        register:function(id, title) {
            var fname = shop.join

                ('<div class="newCustomerInfo">')
                ('<div class="input">Họ tên: ')
                ('<input type="text" tabindex="-1" style="width:210px" id="cart_fullname" onkeypress="return shop.cart.input_info_press(event);" name="fullname" maxlength="30" value="' + user_info.fullname + '" />')
                ('</div>')
                ('<div class="description">Vui lòng cho chúng tôi biết Họ tên của Quý khách</div>')
                ('</div>')(),

                email = shop.join
                    ('<div class="newCustomerInfo mTop5">')
                    ('<div class="input">Email: ')
                    ('<input type="text" style="width:218px" id="cart_email" name="email" onkeyup="return shop.cart.input_info_press(event);" value="' + user_info.email + '" />')
                    ('</div>')
                    ('<div class="description">Vui lòng nhập chính xác địa chỉ email</div>')
                    ('</div>')(),
                mobile_phone = shop.join
                    ('<div class="newCustomerInfo mTop5">')
                    ('<div class="input">Điện thoại di động: ')
                    ('<input type="text" style="width:121px" id="cart_tel" onkeypress="return shop.cart.input_info_press(event);" name="tel" value="' + user_info.mobile_phone + '" maxlength="20" onkeypress="return shop.numberOnly(this, event)" />')
                    ('</div>')
                    ('<div class="description">Vui lòng nhập đúng số điện thoại di động</div>')
                    ('</div>')();

            if (fname != '' || email != '' || mobile_phone != '') {
                var customerInfo = '<div class="guestInfo clearfix">' + fname + email + mobile_phone + '<div class="c"></div></div>';
                return shop.join

                    (' <div class="classic-popup"><div class="classic-popup-top"><div class="right"><div class="bg"></div></div></div><div class="classic-popup-main"><div class="classic-popup-title clearfix"><div class="fl">Nhập thông tin cá nhân</div><a onclick="shop.hide_overlay_popup(\'cart-check-out-step1\');" href="javascript:void(0)" title="Đóng" class="classic-popup-close" >X</a><div class="c"></div></div><div class="classic-popup-content clearfix"><div style="padding: 10px 0px;*padding: 10px;width:327px;" class="content">')
                    ('<div class="content" style="_width:300px;*padding:10px;margin-left:3px;">')
                    ('<div class="reg_cart_form clearfix">')
                    ('<form name="cartRegisterForm" id="cartRegisterForm" class="clearfix">')
                    ('<div class="cartNewForm clearfix">')
                    ('<div id="cError"></div>')
                    ('<div class="infoInputLeft clearfix">' + customerInfo + '</div>')
                    ('<div class="infoInputRight clearfix"></div>')
                    ('<div class="c"></div>')
                    ('</div>')
                    ('</form>')
                    ('<div class="mTop10 clearfix">')
                    ('<a href="javascript:void(0)" onclick="shop.cart.register()" class="blueButton mLeft10" id="fr"><span><span>TIẾP TỤC <b>&raquo;</b></span></span></a>')
                    ('<a href="javascript:void(0)" onclick="shop.cart.stepZero()" class="blueButton" id="fr"><span><span><b>&laquo;</b> QUAY LẠI</span></span></a>')
                    ('<div class="c"></div>')
                    ('</div>')
                    ('<div class="c"></div>')
                    ('</div>')
                    ('</div>')();

            }
            return '';
        },

        moreInfo:function(id, title) {
            var more = '';
            if (shop.cart.conf.cart.payment_id == 'cod' || (shop.cart.conf.shipping.check && shop.cart.conf.shipping.active && shop.cart.conf.cart.payment_id != 'cop' && shop.cart.conf.cart.payment_id != 'coo')) {

                more = shop.join
                    ('<div align="left">Vui lòng cho Rongbay.com biết chi tiết <b>địa chỉ Quý khách </b> </div>')
                    ('<div id="cError"></div>')
                    ('<div align="left">')
                    ('<div id="pTop5" class="newCustomerInfo mTop5">')
                    ('<div class="input">Số nhà, Đường/Phố, Phường/Xã:</div>')
                    ('<input type="text" id="cart_address" name="address" style="width:330px" value="' + shop.cart.conf.user.address + '" />')
                    ('</div>')

                    ('<div id="pTop5" class="newCustomerInfo mTop5">')
                    ('<div class="input">Ghi chú thêm:</div>')
                    ('<textarea id="cart_note" name="note" style="width:330px">' + shop.cart.conf.user.note + '</textarea>')
                    ('<div class="description">Vui lòng cho Rongbay.com biết thời gian hoặc các yêu cầu thêm nếu có.</div>')
                    ('</div>')
                    ('</div>')();
            }
            return shop.popupSite(id, title, shop.join
                ('<div class="content cartMoreAddress" style="padding:10px 20px">')
                ('<form name="cartAddressForm" id="cartAddressForm">')
                (more + '<div align="center" class="mTop10">')
                ('<a href="javascript:void(0)" onclick="shop.cart.moreInfo()" class="blueButton  mLeft10" id="fr"><span><span>TIẾP TỤC <b>&raquo;</b></span></span></a>')
                ('<a href="javascript:void(0)" onclick="shop.cart.stepOne()" id="fr" class="blueButton"><span><span><b>&laquo;</b> QUAY LẠI</span></span></a>')
                ('<div class="c"></div>')
                ('</div>')
                ('</form>')
                ('</div>')());
        },

        //Nội dung form confirm
        confirmProduct:function(id, title) {
            var paymentViSa = '',data = shop.cart.conf.cart.cart, note = '',t = '',warning = '',logo = '',bt_checkout = 'THANH TOÁN';
            if (shop.cart.conf.cart.payment == 1) {
                t = "Thanh toán Online";
                logo = '<a title="SohaPay.com" target="_blank" href="https://sohapay.com/"><img width="207" height="94" border="0" src="style/images/logo_sohapay.png"></a>';
                note = shop.join
                    ('<div class="mLeft25">')
                    ('<div>')
                    ('<div><strong style="color:red">Chú ý:</strong> Quý khách phải có <b>thẻ Visa/Master</b> đã kích hoạt thanh toán online</div>')
                    ('<div class="mTop5">hoặc <b>thẻ ATM đã đăng kí sử dụng internet banking</b> với ngân hàng phát hành thẻ</div>')
                    ('</div>')
                    ('<div class="mTop10">Thanh toán Online được đảm bảo bởi <a href="https://sohapay.com/" target="_blank" title="sohapay.com">SohaPay</a></div>')
                    ('</div>')();
                bt_checkout = 'THANH TOÁN';
            }
            else if (shop.cart.conf.cart.payment == 2) {
                var suggest = '';
                bt_checkout = 'NẠP THẺ';
                t = "Thanh toán bằng Thẻ cào <b>Vinaphone</b>, <b>MobiFone</b>, <b>Viettel</b> và <b>Vcoin</b>";
                logo = '';
                note = shop.join
                    (suggest)();
            }
            else if (shop.cart.conf.cart.payment == 3) {
                var suggest = '';
                bt_checkout = 'THANH TOÁN';
                t = "Thanh toán bằng tài khoản <b>Gold</b>";
                logo = '';
                note = shop.join
                    ('<div class="content" style="padding:0">')
						('<div class="fl">')
							('<div style="width:720px" class="mLeft25">')
								('<div id="el_gold_current"></div>')
								('<div class="mTop5" id="el_sum_num_gold"></div>')
								('<div class="mTop5 mBottom10" id="el_gold_need"></div>')
								('<span id="button_gold_need"></span')
								('<div class="c"></div>')
							('</div>')
						('<div class="c"></div>')
					('</div>')();
            }
            else {
                if (shop.cart.conf.cart.payment_id == 'cod' || shop.cart.conf.cart.payment_id == 'cop' || shop.cart.conf.cart.payment_id == 'coo') {
                    if (shop.cart.conf.cod.type == 0) {
                        t = "Nộp tiền & nhận hàng tại nhà";
                    }
                    else if (shop.cart.conf.cart.payment_id == 'cod') {
                        t = "Thanh toán tại nhà";
                    }
                    else {
                        t = '<strong>Thanh toán bằng tin nhắn điện thoại</strong>';
                        t += '<div class="paymentText" style="padding-top:10px;">Soạn <b>' + num_sms_cart + ' sms</b> có cú pháp: <span style="color: red; font-weight: bold;font-size:16px"> RBM ' + cart_code_sms + ' </span> gửi <span style="color: red; font-weight: bold;font-size:16px">8701</span> để thanh toán cho đơn hàng này (Quý khách phải gửi đủ <b>' + num_sms_cart + ' sms</b> thì đơn hàng này mới được chấp nhận)</div>';
                        t += '<div class="paymentText">';
                        t += '<a href="javascript:void(0)" onClick="shop.cart.viewMoreSmsInfo(this)"><b>Quy định gửi tin nhắn</b></a>';
                        t += '<div class="rule_sms hidden">';
                        t += '<ul class="paymentText">';
                        t += '<li>Khách hàng không được gửi quá 3 tin nhắn có cùng nội dung với một số điện thoại trong thời gian 5 phút</li>';
                        t += '<li>Khách hàng không được gửi quá 30 tin nhắn có cùng nội dung với một số điện thoại trong thời gian 1 giờ</li>';
                        t += '<li>VMS, Sfone:  quy định định mức tiền của mỗi thuê bao là: 150k/ ngày</li>';
                        t += '<li>Khách hàng không được sử dụng các dịch vụ nội dung của một nhà cung cấp quá 150.000 đồng ( đã bao gồm thuế GTGT) trong ngày (từ 0h00:00 đến 23h59:59)</li>';
                        t += '<li>Nếu KH sử dụng quá hạn mức thì KH vẫn bị trừ tiền</li>';
                        t += '</ul>';
                        t += '</div>';
                        t += '</div>';
                    }

                    bt_checkout = 'KẾT THÚC';
                    if (shop.cart.conf.cart.payment_id == 'cod') {
                        bt_checkout = 'ĐỒNG Ý';
                    }

                    logo = '';
                    note = '';
                }
                else {
                    t = "Chuyển khoản thanh toán qua ATM hoặc nộp tiền tại quầy GD ngân hàng về:";
                    warning = '<div style="color:#BE0D0D" class="mTop5 f11">(Quý khách vui lòng tự thanh toán chi phí Chuyển khoản)</div>';
                    if (shop.cart.conf.atm.bank != '' && shop.cart.conf.atm.bank != 'check_cash') {
                        if (!shop.is_exists(shop.cart.conf.bank[shop.cart.conf.atm.bank])) {
                            shop.cart.conf.atm.bank = 'mb_bank';
                        }
                    }
                    else {
                        shop.cart.conf.atm.bank = 'mb_bank';
                    }
                    bt_checkout = 'KẾT THÚC';
                    note = decodeURIComponent(shop.cart.conf.bank[shop.cart.conf.atm.bank]);
                    note = '<div class="mTop10">' + note.replace(/\+/gi, ' ') + '</div>';
                    logo = '<div class="' + shop.cart.conf.atm.bank + '"></div>';
                }
            }

            var shipping_fee = (shop.cart.conf.shipping.code == 'SHIP') ? shop.cart.conf.shipping.fee : shop.cart.conf.shipping.feeCOD,
                shipping_fee_f = (shop.cart.conf.shipping.code == 'SHIP') ? shop.cart.conf.shipping.fee_f : shop.cart.conf.shipping.feeCOD_f,
                ship = '';
            if ((shop.cart.conf.shipping.active || shop.cart.conf.shipping.COD) && shop.cart.conf.shipping.check && shipping_fee > 0) {
                ship = shop.join
                    ('<tr>')
                    ('<td valign="top" align="center" class="item bRight">2</td>')
                    ('<td valign="top" class="item bRight" colspan="2">' + (shop.cart.conf.shipping.COD ? 'Phí giao hàng và thu tiền' : 'Phí giao tận nơi') + '</td>')
                    ('<td valign="top" align="right" class="item bRight">' + shipping_fee_f + '</td>')
                    ('<td valign="top" align="center" class="item bRight">' + shop.cart.conf.cart.numberOtp + '</td>')
                    ('<td valign="top" align="right" class="item">' + data.shipping_fee_f + '</td>')
                    ('</tr>')();
            }

            var regulations = shop.cart.conf.user.type == 'guest' ? shop.join
                ('<div class="mTop10" style="font-size:16px;width:758px;padding-left:5px;">')
                ('<input type="checkbox" id="check-regulations" class="checkbox" checked />')
                ('<label for="check-regulations">')
                ('<strong>Tôi đã đọc và đồng ý với các <a href="http://blog.rongbay.com/2011/03/08/t%E1%BB%B1-d%E1%BB%99ng-dang-l%E1%BA%A1i-tin/" target="_blank" style="font-size:16px">điều khoản và quy định</a> của RồngBay.com</strong>')
                ('</label>')
                ('</div>')() : '';

            var address = '',
                back = '<a href="javascript:void(0)" onclick="shop.cart.stepTwo(true);" class="blueButton" id="fr"><span><span>SỬA THÔNG TIN CÁ NHÂN</span></span></a>';
            if (shop.cart.conf.cart.payment_id == 'cod') {
                address = '<div class="mTop5"><strong>Địa chỉ nhận hàng:</strong> <span class="cff9200">' + shop.cart.conf.user.address + ' - ' + shop.cart.conf.user.note + '</span></div>';
            }
            /*else
             {
             address = back;
             }*/

            inf = '<div class="box-gradien pBottom10 pTop15">'
                + '<div class="title">Thông tin khách hàng ' + back + '</div>'
                + '<div class="content" id="pTop10">'
                + '<div><strong>Họ tên:</strong> <span class="cff9200">' + user_info.fullname + '</span></div>'
                + '<div class="mTop5"><strong>Email:</strong> <span class="cff9200">' + user_info.email + '</span></div>'
                + '<div class="mTop5"><strong>Điện thoại di động:</strong> <span class="cff9200">' + user_info.mobile_phone + '</span></div>'
                + address + '<div class="c"></div>'
                + '</div>'
                + '</div>';

            var strLogo = "";
            if (shop.cart.conf.cart.payment_id == 'visa' || shop.cart.conf.cart.payment_id == 'atm' || shop.cart.conf.cart.payment_id == 'gold') {
                strLogo += '<div class="content">';
                strLogo += '<div class="fl">' + logo + '</div>';
                strLogo += '<div class="fl">' + note + warning + '</div>';
                strLogo += '<div class="c"></div>';
                strLogo += '</div>';
            }

            //	--------------------------------- begin thông tin giỏ hàng -------------------------------- //
            var strResultCart = "";
            if (aryResultCart) {
                var x = 0;
                for (i in aryResultCart) {
                    var style = "";
                    if (x % 2 != 0) {
                        style = " class='cart_2' ";
                    }
                    strResultCart += '<tr ' + style + '>';
                    strResultCart += '<td valign="top" align="center" class="item bRight">' + aryResultCart[i]['item_id'] + '</td>';
                    strResultCart += '<td valign="top"  class="item bRight">' + aryResultCart[i]['ad_title'] + '</td>';
                    strResultCart += '<td valign="top" align="center" class="item bRight">' + aryResultCart[i]['catName'] + '</td>';
                    strResultCart += '<td valign="top" align="center" class="item bRight">' + aryResultCart[i]['num_up'] + '</td>';
                    strResultCart += '</tr>';
                    x++;
                }
            }
            else {
                strResultCart += '<tr>';
                strResultCart += '<td valign="top" align="center" class="item bRight" colspan="5">Không có tin rao nào trong giỏ hàng của bạn</td>';
                strResultCart += '</tr>';
            }
            //	--------------------------------- end thông tin giỏ hàng -------------------------------- //
            return shop.join
                (' <div class="classic-popup"><div class="classic-popup-top"><div class="right"><div class="bg"></div></div></div><div class="classic-popup-main"><div class="classic-popup-title clearfix"><div class="fl">Thanh toán</div><a ' + (typeAlert != 2 ? 'onclick="shop.hide_overlay_popup(\'cart-confirm\');" ' : 'onclick="shop.cart.btnCancelBuyUp(' + item_id + ');"') + ' title="Đóng" class="classic-popup-close" href="javascript:void(0)">x</a><div class="c"></div></div><div class="classic-popup-content clearfix"><div style="padding: 10px 0px;*padding: 10px" class="content">')
                ('<div class="content" style="padding:10px 20px;*padding:10px;">' + inf)
                ('<div class="box-gradien pBottom10 pTop15 mTop10">')
                ('<div class="title">Hình thức thanh toán: <span style="font-size:12px;font-weight:normal;text-transform:none;">' + t + '</span></div>' + strLogo)
                ('</div>')

                ('<div class="box-gradien mTop10" id="box-gradien2">')
                ('<div class="title mTop10 mLeft10">Thông tin chi tiết đơn hàng</div>')
                ('<div class="content" id="listItemConfirm">')
                ('<table class="cart-finish" cellpadding="0" cellspacing="0" width="100%" border="0">')
                ('<thead><tr>')
                ('<th class="head bRight" width="70">ID</th>')
                ('<th class="head bRight">Tiêu đề tin</th>')
                ('<th class="head bRight" width="125">Chuyên mục</th>')
                ('<th class="head bRight" width="90" >Lượt đăng lại</th>')
                ('</tr></thead>' + strResultCart)

                ('<tr>')
                ('<td align="right" class="item total-all" colspan="5"><span id="total-all"></span></td>')
                ('</tr>')
                ('</table>')
                ('</div>')
                ('</div>' + regulations)
                ('<div align="center" class="mTop10" id="btnFinish">')
                ('<span><a href="javascript:void(0)" onclick="shop.cart.finishOrder()" class="blueButton  mLeft10" id="fr"><span><span>' + bt_checkout + '</span></span></a><span>')
                ('<a href="javascript:void(0)" onclick="shop.cart.stepTwo(true)" id="fr" class="blueButton"><span><span><b>&laquo;</b> QUAY LẠI</span></span></a>')
                ('<div class="c"></div>')
                ('</div>')
                ('</div>')();

        },

        //Hiển thị form nạp thẻ
        recharge : function(id, title, recharge, card_val) {
            var note = '', suggest = '', recharge_txt = '', card_type = shop.cart.cardType.get();
            
            //alert("done : "+need);
            if(jQuery.inArray(sum_money_cart,shop.cart.conf.card)==-1){
                need = shop.cart.cardSuggest(sum_money_cart, 0);
                if (need) {
                    suggest += '<div class="title">Gợi ý nạp thẻ:</div>';
                    var total=0;
                    for (var i in need) {
                        suggest += '<div class="mTop5 mLeft25" style="color:red">- ' + need[i] + '<i> thẻ mệnh giá</i> <b><span style="color:blue">' + shop.cart.theme.numberFormat(i, 0, '', '.') + '</span> vnđ</b></div>';
                    }
                    suggest = '<div class="mTop10" style="border-top: 1px solid #009933;padding-top: 10px;margin-top: 10px;">' + suggest + '<div class="mTop5 mLeft25">- <span style="color:red">Số tiền thừa sẽ được cộng tiếp vào đơn hàng của Quý khách</span></div></div>';
                }
            }
            
            //ngannv dev
            /*
            var res=shop.cart.choice_price(sum_money_cart);
            for (var i in res) {
                if (i != 'sub') {
                    suggest += '<div class="mTop5 mLeft25" style="color:red;font-size:12px;">-<b style="color:blue;"> ' + res[i] + '</b><i> thẻ mệnh giá</i> <b><span style="color:blue">' + shop.cart.theme.numberFormat(i, 0, '', '.') + '</span> vnđ</b></div>';
                }
            }
            suggest = '<div class="mTop10" style="border-top: 1px solid #009933;padding-top: 10px;margin-top: 10px;">' + suggest + '<div class="mTop5 mLeft25">- <span style="color:red">Số tiền thừa sẽ được cộng tiếp vào đơn hàng của Quý khách</span></div></div>';
            /*
            if(res['sub']>0){
                suggest+='<div class="mTop5 mleft25" style="color:red"> - Số tiền dư : '+shop.cart.theme.numberFormat(res['sub'], 0, '', '.')+ 'Vnd</div>';
            }*/
            if (card_val && recharge && card_val != '' && recharge != '') {
                var recharge_txt = '<center style="width:340px;color:green;margin:5px auto 10px;padding:10px;background:#fff9d7;border:1px solid #008000;font-size: 14px;">Quý khách vừa nạp thẻ mệnh giá <b style="color:red">' + card_val + '</b> đ<br /><br /><br /><b>Vui lòng nạp tiếp thẻ khác.</b></center>';
            }
            note = shop.join
                ('<div>')
                (recharge_txt + '<center style="width:340px;color:green;margin:5px auto 10px;padding:10px;background:#fff9d7;border:1px solid #008000;font-size: 14px;">Tổng số tiền Quý khách phải nạp là: <b>' + number_format(sum_money_cart) + 'đ</b></center>')
                ('<div class="mTop5" id="msg_cart"></div>')
                ('</div>')();

            return shop.join
                (' <div class="classic-popup"><div class="classic-popup-top">')
                ('<div class="right"><div class="bg"></div></div></div>')
                ('<div class="classic-popup-main"><div class="classic-popup-title clearfix">')
                 ('<div class="fl">Nạp thẻ</div><a ' + (typeAlert != 2 ? 'onclick="shop.hide_overlay_popup(\'cart-recharge\');" ' : 'onclick="shop.cart.btnCancelBuyUp(' + item_id + ');"') + ' title="Đóng" class="classic-popup-close" href="javascript:void(0)">x</a><div class="c"></div></div><div class="classic-popup-content clearfix"><div style="padding: 10px 0px;*padding: 10px;" class="content">')
                ('<div class="content cartRecharge" style="padding:10px 20px">')
                ('<form name="cartRechargeForm" id="cartRechargeForm" onsubmit="return shop.cart.recharge();">')
                (note + '<div id="cError" class="mTop10"></div>')
                ('<div id="complete">')
                ('</div>')
                ('<div align="left" id="pay" style="display:inline ;width:100%">')
                ('<div id="pTop5" class="newCustomerInfo mTop5">')
                ('<div class="input">Loại thẻ cào:</div>')
                ('<div class="card_type">')
                ('<div class="fl" align="center">')
                ('<img src="style/images/blank.gif" width="90" height="30" onclick="shop.cart.chooseTelco(this, \'vinaphone\')" style="cursor:pointer;background:url(style/images/payment/vinaphone.png) no-repeat 50% 50%" /><br />')
                ('<input type="radio" value="vinaphone" id="r_vinaphone" onclick="shop.cart.chooseTelco(this, \'vinaphone\')" tabindex="0" class="radio_info" name="card_type" ' + (card_type == 'vinaphone' ? 'checked ' : 'checked') + '/>')
                ('</div>')
                ('<div class="fl mLeft15" align="center">')
                ('<img src="style/images/blank.gif" width="90" height="30" onclick="shop.cart.chooseTelco(this, \'mobifone\')" style="cursor:pointer;background:url(style/images/payment/mobiphone.png) no-repeat 50% 50%" /><br />')
                ('<input type="radio" value="mobifone" id="r_mobifone" onclick="shop.cart.chooseTelco(this, \'mobifone\')" tabindex="1" class="radio_info" name="card_type" ' + (card_type == 'mobifone' ? 'checked ' : '') + '/>')
                ('</div>')
                ('<div class="fl mLeft15" align="center">')
                ('<img src="style/images/blank.gif" width="60" height="30" onclick="shop.cart.chooseTelco(this, \'viettel\')" style="cursor:pointer;background:url(style/images/newCart/viettel.png) no-repeat 50% 50%" /><br />')
                ('<input type="radio" value="viettel" id="r_viettel" onclick="shop.cart.chooseTelco(this, \'viettel\')" tabindex="1" class="radio_info" name="card_type" ' + (card_type == 'viettel' ? 'checked ' : '') + '/>')
                ('</div>')
                ('<div class="fl mLeft15" align="center">')
                ('<img src="style/images/blank.gif" width="70" height="30" onclick="shop.cart.chooseTelco(this, \'vcoin\')" style="cursor:pointer;background:url(style/images/newCart/vcoin.png) no-repeat 50% 50%" /><br />')
                ('<input type="radio" value="vcoin" id="r_vcoin" onclick="shop.cart.chooseTelco(this, \'vcoin\')" tabindex="1" class="radio_info" name="card_type" ' + (card_type == 'vcoin' ? 'checked ' : '') + '/>')
                ('</div>')
                ('<div class="c"></div>')
                ('</div>')
                ('</div>')

                ('<div id="box_seri" class="newCustomerInfo mTop5">')
                ('<div class="input fl" style="width:115px">Số seri: </div>')
                ('<div class="fl"><input type="text" id="cart_seri" tabindex="3" name="cart_seri" style="width:210px" value="" /></div>')
                ('<div class="c"></div>')
                ('</div>')
                ('<div id="pTop10" class="newCustomerInfo mTop5">')
                ('<div class="input fl" style="width:115px">Mã số thẻ cào: </div>')
                ('<div class="fl"><input type="text" id="cart_recharge" tabindex="3" onkeypress="return shop.cart.cart_recharge_press(event);" name="cart_recharge" style="width:210px" value="" /></div>')
                ('<div class="c"></div>')
                ('</div>')
                ('</div>')
                ('<div align="center" class="mTop10" style="line-height:2px">')
                ('<p id="close"><a href="javascript:void(0)" onclick="shop.cart.recharge()" class="blueButton  mLeft10" id="fr"><span><span>NẠP THẺ <b>&raquo;</b></span></span></a></p>')
                ('<img src="images/loading.gif" align="absmiddle" style="display:none" id="loading_pay" />')
                ('<a href="javascript:void(0)" onclick="shop.cart.backRecharge()" id="fr" class="blueButton"><span><span><b>&laquo;</b> QUAY LẠI</span></span></a>')
                ('<div class="c"></div>')
                ('</div>' + suggest )
                ('</form>')
                ('</div>')();
        },

        //Template Hiển thị danh sách tin rao của 1 giỏ hàng trong history
        viewHistoryCartTemp : function(id, title) {

            var strViewCartHistory = "";
            if (aryCartInfo) {
                var v = 0;
                for (i in aryCartInfo) {
                    var style = '';
                    if (v % 2 != 0) {
                        style = " class='cart_2'";
                    }
                    strViewCartHistory += '<tr ' + style + '>';
                    strViewCartHistory += '<td valign="top" align="center" class="item bRight">' + aryCartInfo[i]['item_id'] + '</td>';
                    strViewCartHistory += '<td valign="top" align="center" class="item bRight"><a href="' + aryCartInfo[i]['url'] + '">' + aryCartInfo[i]['ad_title'] + '</a></td>';
                    strViewCartHistory += '<td valign="top" align="center" class="item bRight">' + aryCartInfo[i]['catName'] + '</td>';
                    strViewCartHistory += '<td valign="top" align="center" class="item bRight">' + aryCartInfo[i]['num_up'] + '</td>';
                    strViewCartHistory += '</tr>';
                    v++;
                }
            }
            else {
                strViewCartHistory += '<tr>';
                strViewCartHistory += '<td valign="top" align="center" class="item bRight" colspan="6">Không có tin rao nào trong giỏ hàng này</td>';
                strViewCartHistory += '</tr>';
            }

            return shop.popupSite(id, title, shop.join
                ('<div class="content" style="padding:10px 20px">')
                ('<div class="box-gradien mTop10" id="box-gradien2">')
                ('<div class="content">')
                ('<table class="cart-finish" cellpadding="0" cellspacing="0" width="100%" border="0" style="margin-top:-15px">')
                ('<thead><tr>')
                ('<th class="head bRight" width="70">ID</th>')
                ('<th class="head bRight">Tiêu đề tin</th>')
                ('<th class="head bRight" width="125">Chuyên mục</th>')
                ('<th class="head bRight" width="80" >Lượt đăng lại</th>')
                ('</tr></thead>' + strViewCartHistory)
                ('<tr>')
                ('<td align="right" class="item total-all" colspan="4"><span id="total-all">Tổng giá trị thanh toán: ' + number_format(sum_money_cart) + 'đ</span></td>')
                ('</tr>')
                ('</table>')
                ('</div>')
                ('</div>')
                ('<div align="center" class="mTop10">')
                //('<a href="javascript:void(0)" onclick="shop.cart.finishOrder()" class="blueButton  mLeft10" id="fr"><span><span>THANH TOÁN</span></span></a>')
                ('<a href="javascript:void(0)" onclick="shop.cart.historyCart()" id="fr" class="blueButton"><span><span><b>&laquo;</b> QUAY LẠI</span></span></a>')
                ('<div class="c"></div>')
                ('</div>')
                ('</div>')());
        },

        //Template hiển thị lịch sử giỏ hàng
        historyCartTemp : function(id, title) {
            return shop.popupSite(id, title, shop.join
                ('<div class="content" style="padding:10px 20px;*padding:0px">')
                ('<div class="box-gradien mTop10" id="box-gradien2">')
                ('<div class="title mTop10 mLeft10">Thông tin chi tiết các đơn hàng của bạn</div>')
                ('<div class="content" id="listItemHistory">')
                ('</div>')
                ('</div>')
                ('</div>')());
        },

        paymentViSa:function() {
            return shop.join
                ('<form id="checkoutSoHa" method="post" action="' + shop.cart.conf.cart.url + '">')
                ('<input type="hidden" value="' + shop.cart.conf.cart.quantity + '" name="quantity" />')
                ('<input type="hidden" value="' + shop.cart.conf.cart.order_id + '" name="id" />')
                ('<input type="hidden" value="' + shop.cart.conf.cart.total + '" name="total" />')
                ('<input type="hidden" value="' + shop.cart.conf.cart.good_name + '" name="good" />')
                ('<input type="hidden" value="' + shop.cart.conf.cart.item_ids + '" name="item_ids" />')
                ('<input type="hidden" value="' + shop.cart.conf.user.fullname + '" name="fullname" />')
                ('<input type="hidden" value="' + shop.cart.conf.user.mobile_phone + '" maxlength="50" name="mobiphone" />')
                ('<input type="hidden" value="' + shop.cart.conf.user.email + '" maxlength="50" name="email" />')
                ('<input type="hidden" value="' + shop.cart.conf.user.id + '" maxlength="50" name="uid" />')
                ('</form>')();
        },

        bankInfo:function() {
            if (shop.cart.conf.atm.bank != '' && shop.cart.conf.atm.bank != 'check_cash') {
                if (!shop.is_exists(shop.cart.conf.bank[shop.cart.conf.atm.bank])) {
                    shop.cart.conf.atm.bank = 'mb_bank';
                }
            } else {
                shop.cart.conf.atm.bank = 'mb_bank';
            }
            var logo = '<div class="' + shop.cart.conf.atm.bank + '"></div>',
                note = decodeURIComponent(shop.cart.conf.bank[shop.cart.conf.atm.bank]);
            note = '<div class="mTop10">' + note.replace(/\+/gi, ' ') + '</div>';

            jQuery('.bank_list').hide();
            jQuery('.bank_info .bank_detail').html(shop.join
                ('<div class="fl">' + logo + '</div>')
                ('<div class="fl" style="width:380px">' + note)
                ('<div style="color:#BE0D0D" class="f11 mTop5">(Quý khách vui lòng tự thanh toán chi phí Chuyển khoản)</div></div>')
                ('<div class="c"></div>')()
            )
            jQuery('.bank_info').show();
        },

        newPrice:function(obj) {
            var checked = false, price = parseInt(shop.cart.conf.cart.cart.price);
            if (shop.cart.conf.cart.cart.price != shop.cart.conf.cart.cart.first_pay) {
                price = parseInt(shop.cart.conf.cart.cart.first_pay);
            }
            if (shop.is_obj(obj)) {
                if (obj.checked == true) {
                    shop.cart.conf.cart.priceAndShip = shop.cart.conf.cart.numberOtp * (price + parseInt(shop.cart.conf.cart.cart.fee_shipping));
                    checked = true;
                }
            }
            if (checked == false) {
                shop.cart.conf.cart.priceAndShip = shop.cart.conf.cart.numberOtp * price;
            }
            if ((shop.cart.conf.cart.payment_id == 'cod' || shop.cart.conf.cart.payment_id == 'coo') && shop.cart.conf.shipping.feeCOD > 0) {
                shop.cart.conf.cart.priceAndShip = shop.cart.conf.cart.numberOtp * (price + shop.cart.conf.shipping.feeCOD);
            }
            jQuery('#bgAllPrice').html(shop.cart.theme.numberFormat(shop.cart.conf.cart.priceAndShip));
        },

        newOtp:function(number) {
            shop.cart.conf.cart.numberOtp = number;
            var otp = '', limit = 1, price = parseInt(shop.cart.conf.cart.cart.price);
            if (shop.cart.conf.cart.cart.price != shop.cart.conf.cart.cart.first_pay) {
                price = parseInt(shop.cart.conf.cart.cart.first_pay);
            }
            if (shop.cart.conf.cart.payment_id == 'cop') {
                limit = shop.cart.conf.cart.numberOtp;
            }
            for (var i = 1; i <= limit; i++) {
                otp += shop.join
                    ('<div class="mTop10 otp">')
                    ('<div class="newLabel">Mật khẩu:</div>')
                    ('<div class="infoInputTxt" style="width:140px">')
                    ('<input type="text" name="otp' + i + '" id="otp' + i + '" class="txt" style="width:130px"/>')
                    ('</div>')
                    ('</div>')();
            }
            jQuery('.otp_container').html(otp);
            if (shop.cart.conf.cart.payment_id == 'cop') {
                jQuery('#sms_number').html(limit);
            }
            //doi gia tien
            if ((shop.cart.conf.cart.payment_id != 'cod' || shop.cart.conf.cart.payment_id != 'cop' || shop.cart.conf.cart.payment_id != 'coo') && shop.cart.conf.shipping.fee > 0) {
                jQuery('#feePrice').html(shop.cart.theme.numberFormat(number * shop.cart.conf.shipping.fee) + ' đ');
            }
            if ((shop.cart.conf.cart.payment_id == 'cod' || shop.cart.conf.cart.payment_id == 'coo') && shop.cart.conf.shipping.feeCOD > 0) {
                jQuery('#feePrice').html(shop.cart.theme.numberFormat(number * shop.cart.conf.shipping.feeCOD) + ' đ');
            }
            jQuery('#numPrice').html(shop.cart.theme.numberFormat(number * price) + " đ");
            shop.cart.theme.newPrice(document.getElementById('shipping-check'));
        },

        numberFormat:function(number, decimals, dec_point, thousands_sep) {
            var n = number, prec = decimals;
            n = !isFinite(+n) ? 0 : +n;
            prec = !isFinite(+prec) ? 0 : Math.abs(prec);
            var sep = (typeof thousands_sep == "undefined") ? '.' : thousands_sep;
            var dec = (typeof dec_point == "undefined") ? ',' : dec_point;
            var s = (prec > 0) ? n.toFixed(prec) : Math.round(n).toFixed(prec); //fix for IE parseFloat(0.55).toFixed(0) = 0;
            var abs = Math.abs(n).toFixed(prec);
            var _, i;
            if (abs >= 1000) {
                _ = abs.split(/\D/);
                i = _[0].length % 3 || 3;
                _[0] = s.slice(0, i + (n < 0)) +
                    _[0].slice(i).replace(/(\d{3})/g, sep + '$1');
                s = _.join(dec);
            } else {
                s = s.replace(',', dec);
            }
            return s;
        },

        systemAlert:function(msg, title) {
            var key = shop.get_uuid();
            title = title ? title : 'Thông báo từ hệ thống';
            shop._active_popup(key, "", "",
                {
                    type: "overlay",
                    auto_hide: 8900,
                    overlay : {
                        'opacity' : 0.3,
                        'background-color' : '#000'
                    }
                });
            shop._active_popup('system-alert', title,
                shop.popupSite('system-alert', title, shop.join
                    ('<div class="content" style="padding:20px">')
                    ('<div class="box-gradien" id="site-regulations" style="padding:20px 10px;width:435px;overflow:hidden">' + msg + '</div>')
                    ('</div>')(), key),
                {
                    type: 'one-time',
                    auto_hide: 9000,
                    background: {
                        'background-color' : 'transparent'
                    },
                    border: {
                        'background-color' : 'transparent',
                        'padding' : '0px'
                    },
                    title: {
                        'display' : 'none'
                    },
                    content: {
                        'padding' : '0px',
                        'width' : '500px'
                    }
                });
        }
    },

// ------------------------------------- extra function --------------------------------- //
    showUserInfo:function(id) {
        if (id == 0 || id == 1) {
            if (id != shop.cart.conf.userInfo) {
                shop.cart.conf.userInfo = id;
                jQuery('.radio_info').each(function() {
                    if (this.id == 'radio_info' + id) {
                        this.checked = true;
                    } else {
                        this.checked = false;
                    }
                });
                if (id == 1) {
                    jQuery('.guestInfo').hide();
                    jQuery('.customerInfoC').show();
                } else {
                    jQuery('.guestInfo').show();
                    jQuery('.customerInfoC').hide();
                }
            }
        }
    },
    showUserAddress:function(id) {
        id = parseInt(id);
        if (id == 0 || id == 1) {
            if (id != shop.cart.conf.userAddress) {
                shop.cart.conf.userAddress = id;
                jQuery('.radio_address').each(function() {
                    if (this.id == 'radio_address' + id) {
                        this.checked = true;
                    } else {
                        this.checked = false;
                    }
                });
                if (id == 1) {
                    jQuery('.guestAddress').hide();
                    jQuery('.customerAddressC').show();
                } else {
                    jQuery('.guestAddress').show();
                    jQuery('.customerAddressC').hide();
                }
            }
        }
    },
    chooseTelco:function(obj, type) {
        /*shop.get_ele('r_' + type).checked = true;
        if (type == 'vinaphone' || type == 'mobifone') {
			jQuery('#box_seri').hide();
		}
		else {
			jQuery('#box_seri').show();
		}*/
    },
    showOnlineBank:function() {
        if (jQuery('.view_more_bank').hasClass('hidden')) {
            jQuery('.view_more_bank').removeClass('hidden');
            jQuery('.view_more_bank').css("display", "block");
            //jQuery('.view_more_bank').slideDown().removeClass('hidden');
        } else {
            jQuery('.view_more_bank').addClass('hidden');
            jQuery('.view_more_bank').css("display", "none");
            //jQuery('.view_more_bank').slideUp().addClass('hidden');
        }
    },
    choosePayment:function(obj, checked) {
        if (obj.id == 'visa' && sum_num_up < 600) {
            shop.get_ele('radio_' + obj.id).checked = false;
            alert('Hình thức thanh toán này chỉ áp dụng với đơn hàng từ 200.000đ trở lên!');
        }
        else {
            //kich hoat
            jQuery('.pay_active').removeClass('pay_active').removeClass('clicked');
            jQuery(obj).addClass('pay_active clicked');
            //khoi tao lai chieu cao
            if (obj.id == 'atm') {
                jQuery('.bank').slideDown();
            } else {
                jQuery('.bank').slideUp();
            }
            //select radio
            shop.get_ele('radio_' + obj.id).checked = true;
            jQuery('.paymentGuide').hide();
            jQuery('.paymentGuide', obj).show();
        }

    },
    chooseBank:function(obj, id) {
        jQuery('.bank .active').removeClass('active');
        jQuery(obj).addClass('active');
        shop.cart.conf.atm.bank = id;
        shop.cart.theme.bankInfo();
    },
    restoreBank:function() {
        if (shop.cart.conf.atm.bank != '' && shop.cart.conf.cart.payment_id == 'atm') {
            jQuery('.bank_list a').each(function() {
                if (jQuery(this).hasClass('active')) {
                    shop.cart.chooseBank(this, shop.cart.conf.atm.bank);
                }
            });
        }
    },
    listBank:function() {
        jQuery('.bank_info').hide();
        jQuery('.bank_list').show();
    },
    showPaymentMoney:function() {
        //var item = shop.cart.conf.cart.cart, atm = shop.cart.conf.atm;
        //return (parseInt(item.buyer) < atm.people) && (TIME_NOW < parseInt(item.endTime)) && (TIME_NOW > parseInt(item.startTime)) && ( TIME_NOW < atm.atm);
    },
    backRecharge:function() {
        if (!shop.is_exists(shop._store.variable['recharge_start'])) {
            shop._store.variable['recharge_start'] = false;
        }
        if (!shop._store.variable['recharge_start']) {
            shop.cart.stepThree();
        }
    },
    isCOD:function() {
        return shop.cart.conf.shipping.COD && shop.cart.conf.cod.type == 0
    },
    isCOO:function() {
        return shop.cart.conf.shipping.COD && shop.cart.conf.cod.type == 2
    },
    isCOP:function() {
        return shop.cart.conf.shipping.COD && shop.cart.conf.cod.type == 1
    },
    cardType:{
        get:function() {
            return shop.cookie.get('card_type')
        },
        save:function(v) {
            shop.cookie.set('card_type', v, 86400 * 30 * 12, '/')
        }
    },

    cardSuggest:function(number, bug) {
        if (number > 0) {
            var stop = 0, temp = 0, idx = 0, need = {}, i = 0;
            //cong them gold do triet khau
            //number = Math.ceil(number/shop.cart.conf.card_rate);
            while (stop == 0) {
                if (number < shop.cart.conf.card[0]) {
                    stop = 1;
                    if (number > 0) {
                        if (shop.is_exists(need[shop.cart.conf.card[0]])) {
                            need[shop.cart.conf.card[0]]++;
                        }
                        else {
                            need[shop.cart.conf.card[0]] = 1;
                        }
                    }
                }
                else {
                    for (i = 0; i < shop.cart.conf.card.length; i++) {
                        if ((number < shop.cart.conf.card[i]) || (i == shop.cart.conf.card.length - 1)) {
                            idx = i;
                            if (number < shop.cart.conf.card[i]) {
                                idx = i - 1;
                            }

                            if (number < shop.cart.conf.card[i] && number > shop.cart.conf.card[idx]) {
                                idx = i;
                                number = 0;
                                if (shop.is_exists(need[shop.cart.conf.card[idx]])) {
                                    need[shop.cart.conf.card[idx]]++
                                }
                                else {
                                    need[shop.cart.conf.card[idx]] = 1;
                                }
                            }
                            else {
                                temp = Math.floor(number / shop.cart.conf.card[idx]);
                                number = number - temp * shop.cart.conf.card[idx];
                                need[shop.cart.conf.card[idx]] = temp;
                            }
                            break;
                        }
                    }
                }
            }
            if (bug) {
                bug = '';
                for (i in need) {
                    bug += '<div class="mTop5 mLeft10">- <b>' + need[i] + '</b> thẻ mệnh giá <span style="color:red">' + shop.cart.theme.numberFormat(i, 0, '', '.') + '</span> đ</div>';
                }
                jQuery('body').prepend(bug);
            }
            return need;
        }
        return false;
    },
    
    choice_price: function(price) {
        var unit = 100000,
            res = {},
            card = shop.cart.conf.card;
        price = parseInt(price); //Số tiền phải nạp
        var need = Math.ceil(price / unit) * unit; //tổng tiền cần nạp
        var sub = need - price; //Số tiền dư
        var tempt = 0,
            total = 0;
        while (need > 0) {
            for (var i = (card.length - 1); i >= 0; i--) {
                if (need >= card[i]) {
                    tempt = parseInt(card[i]);
                    total = Math.floor(need / tempt);
                    need = need - (tempt * total);
                    res[tempt] = total;
                    break;
                }
            }
        }
        res['sub']=sub;
        return res;

    }
    };
//shop.cart.choice_price(1400000);
