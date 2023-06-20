# Triade Injector
```diff
Current Status:
+ Working [Tested] 
[Updated 2:55 am Tuesday, June 20, 2023 (EDT)]
```
The Triade Injector allows you to use the `client` namespace required in many scripts. You can simply make your own script within the function with ease, best for beginners
```js
// ==UserScript==
// @name         Triade Injector
// @description  Full Triade API
// @author       RubyDevil
// @version      6.6.6
// @run-at       document-body
// @namespace    http://tampermonkey.net/
// @match        https://famishs.io/*
// @icon         data:image/x-icon;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAABRYJACuzSQAPPxoACCENACOSOwASTR8AL8ZRAC2+TQAJJhAAAggDAAceDAAz1FYAFl0mAAECAQAZaysACy4TABBEHAArtUoAAw0FAB5+MwAjlDwADjkXADPWVwAop0QAEkwfADLTVgAijjoAAQQCADDIUQAAAQEAL8VQAAEEAQAIIg4AMtBUACOTPAAAAQAABRcJACWbPwAPQBoABBEHABpsLAAwx1EAL8RQADLSVQA011gAIYo4ABBFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKLwYoAAAAAAAAAAAAAAAAExgiAwAAAAAAAAAAAAAAAA4uFw0AAAAAAAAAAAAAAAAADy0UAAAAAAAAAAAAAAAAABkaJgoAAAAAAAAAAAAAAAAQHRIlAAAAAAAAAAAAAAEhFggqEQQLHAAAAAAAAAApBx8sDB0rAiEAAAAAAAAAJxUjBQUjFRsJAAAAAAAAACQgICAgICAcHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @require      https://raw.githubusercontent.com/RubyDevil/famishs.io-source/main/latest/guify-bypass.js
// @require      https://raw.githubusercontent.com/RubyDevil/famishs.io-source/main/latest/pkg/client.v10.js
// @require      https://raw.githubusercontent.com/RubyDevil/famishs.io-source/main/latest/pkg/threadsafe.v10.js
// @webRequest   [{"selector":{"include":"https://famishs.io/pkg/9d9xcodkvcvidfg.js"},"action":"cancel"}]
// @webRequest   [{"selector":{"include":"https://famishs.io/pkg/aaoaaiaajjzxucducsuvc.js"},"action":"cancel"}]
// ==/UserScript==

/**
 ** Made by RubyDevil
 ** DO NOT change the name of this function
 **/

function TriadeInject(client) {
    var guify = TriadeGUI; // guify-bypass (remove if not needed)
    console.log(client);
    // your code here...
}
```
