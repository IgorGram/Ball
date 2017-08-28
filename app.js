"use strict";

var field = document.getElementById("field");
var ball = document.getElementById("ball");

field.addEventListener("click", onFieldClick);
var clientRect = field.getBoundingClientRect();
var fieldTop = clientRect.top + field.clientTop;
var fieldLeft = clientRect.left + field.clientLeft;
var fieldRight = clientRect.right - field.clientLeft;
var fieldBottom = clientRect.bottom - field.clientTop;

function onFieldClick(event) {
    var mousePointerLeft = event.clientX;
    var mousePointerTop = event.clientY;

    //var currentX = getComputedStyle(ball).top;
    //var currentY = getComputedStyle(ball).left;
    var topBall = (mousePointerTop - fieldTop - ball.clientHeight / 2);
    var leftBall = (mousePointerLeft - fieldLeft - ball.clientWidth / 2);
    var rightBall = (mousePointerLeft - fieldRight - ball.clientWidth);
    var bottomBall = (mousePointerTop - fieldBottom - ball.clientWidth);

    if(topBall < 0) topBall = 0;

    if(leftBall < 0) leftBall = 0;

    if(mousePointerLeft > (fieldRight - fieldLeft)) leftBall = fieldRight - fieldLeft - ball.clientWidth;
    if(mousePointerTop > (fieldBottom - fieldTop)) topBall = fieldBottom - fieldTop - ball.clientWidth;

    ball.style.top = topBall + "px";
    ball.style.left = leftBall + "px";
}
