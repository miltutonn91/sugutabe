'use strict';

$(function () {
  // ハンバーガークリックで開閉
  $('.hamburger-icon').on('click', function () {
    $(this).toggleClass('close'); // ✖ に変化
    $('.nav').toggleClass('open'); // nav 表示・非表示
  });

  // メニュー内リンククリックで閉じる
  $('.nav__item a').on('click', function () {
    $('.hamburger-icon').removeClass('close'); // ✖→🍔 に戻す
    $('.nav').removeClass('open'); // nav 閉じる
  });
});
