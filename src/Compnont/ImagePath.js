import React, { Component } from 'react'
import { Text, } from 'react-native'

const images = {
    addconnecion_3: require('../assets/Images/addconnecion_3.png'),
    addconnecion_4: require('../assets/Images/addconnecion_4.png'),
    addconnection_1: require('../assets/Images/addconnection_1.png'),
    addconnection_2: require('../assets/Images/addconnection_2.png'),
    addmember: require('../assets/Images/addmember.png'),
    addnew_yellow: require('../assets/Images/addnew_yellow.png'),
    add_purple: require('../assets/Images/add_purple.png'),
    add_square: require('../assets/Images/add_square.png'),
    add: require('../assets/Images/add.png'),
    applepay: require('../assets/Images/applepay.png'),
    arrow_right: require('../assets/Images/arrow_right.png'),
    babyproducts: require('../assets/Images/babyproducts.png'),
    barcode: require('../assets/Images/barcode.png'),
    beverages: require('../assets/Images/beverages.png'),
    cart_gray_1: require('../assets/Images/cart_gray_1.png'),
    back: require('../assets/Images/back.png'),
    cart_gray: require('../assets/Images/cart_gray.png'),
    cart_purple_nav_1: require('../assets/Images/cart_purple_nav_1.png'),
    cart_purple_nav: require('../assets/Images/cart_purple_nav.png'),
    cart_purple: require('../assets/Images/cart_purple.png'),
    cart_white: require('../assets/Images/cart_white.png'),
    cart_yellow: require('../assets/Images/cart_yellow.png'),
    cleaning: require('../assets/Images/cleaning.png'),
    confirmation: require('../assets/Images/confirmation.png'),
    confirmedverification: require('../assets/Images/confirmedverification.png'),
    connect: require('../assets/Images/connect.png'),
    cookingessentials: require('../assets/Images/cookingessentials.png'),
    Costcowholesale: require('../assets/Images/Costcowholesale.png'),
    couponcode: require('../assets/Images/couponcode.png'),
    camera: require('../assets/Images/camera.png'),
    couponscan: require('../assets/Images/couponscan.png'),
    coupon: require('../assets/Images/coupon.png'),
    close: require('../assets/Images/close.png'),
    disconnect: require('../assets/Images/disconnect.png'),
    discount: require('../assets/Images/discount.png'),
    dropdown_purple: require('../assets/Images/dropdown_purple.png'),
    dropdown: require('../assets/Images/dropdown.png'),
    eye_purple: require('../assets/Images/eye_purple.png'),
    eye_off: require('../assets/Images/eye_off.png'),
    family_1: require('../assets/Images/family_1.png'),
    family_2: require('../assets/Images/family_2.png'),
    family: require('../assets/Images/family.png'),
    fav_dark: require('../assets/Images/fav_dark.png'),
    fav_purple: require('../assets/Images/fav_purple.png'),
    fav_yellow: require('../assets/Images/fav_yellow.png'),
    filter: require('../assets/Images/filter.png'),
    fire_purple: require('../assets/Images/fire_purple.png'),
    fire: require('../assets/Images/fire.png'),
    fruits: require('../assets/Images/fruits.png'),
    lock: require('../assets/Images/lock.png'),
    googlepay: require('../assets/Images/googlepay.png'),
    Group_green: require('../assets/Images/Group_green.png'),
    home_1: require('../assets/Images/home_1.png'),
    home_2: require('../assets/Images/home_2.png'),
    home_3: require('../assets/Images/home_3.png'),
    home_4: require('../assets/Images/home_4.png'),
    home_5: require('../assets/Images/home_5.png'),
    home_6: require('../assets/Images/home_6.png'),
    home_purple: require('../assets/Images/home_purple.png'),
    home: require('../assets/Images/home.png'),
    HouseholdList_dark: require('../assets/Images/HouseholdList_dark.png'),
    household: require('../assets/Images/household.png'),
    Image_13: require('../assets/Images/Image_13.png'),
    JD_11_512: require('../assets/Images/JD_11_512.png'),
    logo_white: require('../assets/Images/logo_white.png'),
    logo: require('../assets/Images/logo.png'),
    mark_green: require('../assets/Images/mark_green.png'),
    mark_purple: require('../assets/Images/mark_purple.png'),
    refinedby_checked: require('../assets/Images/refinedby_checked.png'),
    refinedby_unchecked: require('../assets/Images/refinedby_unchecked.png'),
    remove: require('../assets/Images/remove.png'),
    ribbon_dark: require('../assets/Images/ribbon_dark.png'),
    ribbon_purple: require('../assets/Images/ribbon_purple.png'),
    ribbon: require('../assets/Images/ribbon.png'),
    searchresults_1: require('../assets/Images/searchresults_1.jpg'),
    searchresults_2: require('../assets/Images/searchresults_2.png'),
    searchresults_3: require('../assets/Images/searchresults_3.png'),
    searchresults_4: require('../assets/Images/searchresults_4.png'),
    selectdate: require('../assets/Images/selectdate.png'),
    Shape23: require('../assets/Images/Shape23.png'),
    shoppinghistory: require('../assets/Images/shoppinghistory.png'),
    shoppinglist_1: require('../assets/Images/shoppinglist_1.png'),
    shoppinglist_2: require('../assets/Images/shoppinglist_2.png'),
    shopping_list: require('../assets/Images/shopping_list.png'),
    signup_checked: require('../assets/Images/signup_checked.png'),
    signup_unchecked: require('../assets/Images/signup_unchecked.png'),
    sortby: require('../assets/Images/sortby.png'),
    splash_bg: require('../assets/Images/splash_bg.png'),
    splash_withtext: require('../assets/Images/splash_withtext.png'),
    storecards: require('../assets/Images/storecards.png'),
    storeitems: require('../assets/Images/storeitems.png'),
    storemembership: require('../assets/Images/storemembership.png'),
    subscription_basic: require('../assets/Images/subscription_basic.png'),
    subscription_bronze: require('../assets/Images/subscription_bronze.png'),
    subscription_gold: require('../assets/Images/subscription_gold.png'),
    subscription_silver: require('../assets/Images/subscription_silver.png'),
    subtitutes: require('../assets/Images/subtitutes.png'),
    Successfully: require('../assets/Images/Successfully.png'),
    summary_dark: require('../assets/Images/summary_dark.png'),
    summary: require('../assets/Images/summary.png'),
    Target: require('../assets/Images/Target.png'),
    wallmart_gray: require('../assets/Images/wallmart_gray.png'),
    wallmart_productdetail: require('../assets/Images/wallmart_productdetail.png'),
    wallmart_purple: require('../assets/Images/wallmart_purple.png'),
    paypal_1: require('../assets/Images/paypal_1.png'),
    radio_button_checked:require('../assets/Images/radiobutton_checked.png'),
    on:require('../assets/Images/on.png'),
    off:require('../assets/Images/off.png'),
    previouslyselected_1:require('../assets/Images/previouslyselected_1.png'),
    previouslyselected_2:require('../assets/Images/previouslyselected_2.png'),
    offer_purple:require('../assets/Images/offer_purple.png'),
    offer:require('../assets/Images/offer.png'),
    notifications:require('../assets/Images/notifications.png'),
    // notifications1:require('../assets/Images/notifications1.png'),
    notifications1:require('../assets/Images/notificationgrey.png'),
    pantry:require('../assets/Images/pantry.png'),
    product_detail_img:require('../assets/Images/product_detail_img.png'),
    neighbor_shopping:require('../assets/Images/neighbor_shopping_list.png'),
    PromotionsCoupons_2:require('../assets/Images/PromotionsCoupons_2.png'),
    PromotionsCoupons_1:require('../assets/Images/PromotionsCoupons_1.png'),
    PromotionsCoupons_3:require('../assets/Images/PromotionsCoupons_3.png'),
    purchase_report:require('../assets/Images/purchase_report.png'),
    radiobutton_checked:require('../assets/Images/radiobutton_checked.png'),
    search:require('../assets/Images/search.png'),
    personalcare:require('../assets/Images/personalcare.png'),
    searchresults_11:require('../assets/Images/searchresults_11.png'),
    radio_button:require('../assets/Images/radio_button.png'),
    neighbor_1:require('../assets/Images/neighbor_1.png'),
    neighbor_2:require('../assets/Images/neighbor_2.png'),
    neighbor_3:require('../assets/Images/neighbor_3.png'),
    neighbor_4:require('../assets/Images/neighbor_4.png'),
    QR_code:require('../assets/Images/QR_code.png'),
    menu:require('../assets/Images/menu.png'),
    connect1:require('../assets/Images/connect1.png'),
    disconnect1:require('../assets/Images/disconnect1.png'),
    Path_img:require('../assets/Images/Path_1103.png'),
    check:require('../assets/Images/check.png'),
    on_name:require('../assets/Images/on_name.png'),
    plus_color:require('../assets/Images/plus_color.png'),
    off_name:require('../assets/Images/off_name.png'),
    Group_User:require('../assets/Images/Group_User.png'),
    plus:require('../assets/Images/plus.png'),
    minus:require('../assets/Images/minus.png'),
    like:require('../assets/Images/like.png'),
    close_black:require('../assets/Images/close_black.png'),
    Add_like:require('../assets/Images/Add_like.png'),
    search_grey:require('../assets/Images/search_grey.png'),
    profile_gray:require('../assets/Images/profile_gray.png'),
    plusnewAdd:require('../assets/Images/plusnewAdd.png'),
    heart_purpal:require('../assets/Images/heart_purpal.png'),
    heart_grey:require('../assets/Images/heart_grey.png'),
    ComingSoon:require('../assets/Images/ComingSoon.png'),
    todolist:require('../assets/Images/todolist.png'),
    todolistActive:require('../assets/Images/todolistActive.png'),
}

export default images
