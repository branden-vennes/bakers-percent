{
  inputs = {
    flake-utils = {
      url = "github:numtide/flake-utils";
    };

    bun2nix = {
      url = "github:nix-community/bun2nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { nixpkgs, flake-utils, bun2nix, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in rec {
        packages.default = pkgs.callPackage ./default.nix {
          bun2nix = bun2nix.packages.${system}.default;
        };
        packages.docker = pkgs.dockerTools.buildImage {
          name = "b-vennes/bakers-percent";
          tag = "latest";
          config = {
            Cmd = [ "${packages.default}/bin/bakers-percent" ];
          };
        };
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            bun
            bun2nix.packages.${system}.default
          ];
        };
      }
    );
}
