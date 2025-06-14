// ==UserScript==
// @name           Noteflight Tuplet Improver
// @namespace      Unseeable's Noteflight Tools
// @version        v1.0.0
// @description:en allows you to make tuplets of any size in Noteflight!
// @description:fr vous permet de créer des groupes de notes de n'importe quelle taille dans Noteflight!
// @description:de ermöglicht es Ihnen, in Noteflight Noten Gruppierung jeder Größe zu erstellen!
// @author         Colton Stone
// @license        GPL-3.0-or-later
// @tag            productivity
// @tag            utilities
// @match          *://www.noteflight.com/scores/view/*
// @icon           https://www.google.com/s2/favicons?sz=32&domain=noteflight.com
// @grant          unsafeWindow
// ==/UserScript==

(function() {
  var uwin = unsafeWindow;
  console.log(uwin);
  function checkNested(obj, args) {
    for (var i = 0; i < args.length; i++) {
      if (!obj || !obj.hasOwnProperty(args[i])) {
        return false;
      }
      obj = obj[args[i]];
    }
    return true;
  }
  function waitForGlobal(keyPath, callback) {
    var args = keyPath.split('.');
    if (checkNested(uwin, args)) {
      callback();
    } else {
      setTimeout(function() {
        waitForGlobal(keyPath, callback);
      }, 100);
    }
  }
  var nfeditor;
  waitForGlobal("nfeditor", () => {
    nfeditor = uwin.nfeditor;
    nfeditor.palette().currentPalette().applyTuplet = (e) => {
      if (e == "septuplet") {
        var l = uwin.prompt("Enter number of notes in tuplet:");
        nfeditor.documentController.controller.createTuplet(parseInt(l));
      } else {
        nfeditor.palette().currentPalette().applyAction("tuplet", {
          duplet: 2,
          triplet: 3,
          quadruplet: 4,
          quintuplet: 5,
          sextuplet: 6
        }[e]);
      }
    };
  });
})();