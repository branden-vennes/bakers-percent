{ bun2nix, ... }:
bun2nix.mkDerivation {
  pname = "bakers-percent";
  version = "0.1.0";

  src = ./.;

  bunDeps = bun2nix.fetchBunDeps {
    bunNix = ./bun.nix;
  };

  module = "src";
}
