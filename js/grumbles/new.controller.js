angular
.module("grumblr")
.controller("GrumbleNewController", [
  "$stateParams",
  GrumbleNewControllerFunction
]);

function GrumbleNewControllerFunction(){
  grumble = this.newGrumble
  grumbles.push(grumble)
  state.go()
}
