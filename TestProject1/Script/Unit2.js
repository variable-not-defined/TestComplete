//JavaScript
function test2()
{
var url = "https://smartbear.com";

Browsers.Item(btChrome).Run(url);
var page = Sys.Browser().Page(url);
//var element = page.FindChildByXPath("//*[@id="drift-frame-chat"]");
var style = page.contentDocument.defaultView.getComputedStyle(element, "");
//Log.Message("The Properties of web page element are as follows")
//Log.Message("Background Color : " + style.backgroundColor);
//Log.Message("Font Family : " + style.fontFamily);
//Log.Message("Font Size : " + style.fontSize);
}
