angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/about.html',
    ""
  );


  $templateCache.put('app/views/main.html',
    "<div class=\"row text-center\">\n" +
    "  <div class=\"col-md-12\">\n" +
    "    <h1 class=\"text-muted\">\n" +
    "      Controlling devices with MQTT and Raspberry Pi\n" +
    "    </h1>\n" +
    "    <br>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-12\">\n" +
    "    <li class=\"tg-list-item\">\n" +
    "      <p>LED</p>\n" +
    "      <input class=\"tgl tgl-ios\" id=\"led\" type=\"checkbox\" ng-model=\"params.led\"></input>\n" +
    "      <label class=\"tgl-btn\" for=\"led\"></label>\n" +
    "      <hr>\n" +
    "    </li>\n" +
    "    <br><br>\n" +
    "    <li class=\"tg-list-item\">\n" +
    "      <p>X Box</p>\n" +
    "      <input class=\"tgl tgl-ios\" id=\"xbox\" type=\"checkbox\" ng-model=\"params.xbox\"></input>\n" +
    "      <label class=\"tgl-btn\" for=\"xbox\"></label>\n" +
    "      <hr>\n" +
    "    </li>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
