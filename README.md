# Baker's Percent Calculator

Calculate quantities of ingredients based on their ratio to the flour quantity, useful in baking!

## Build and Run

This project requires a [Nix Install](https://nixos.org) to run because dependencies are retrieved and managed by it.

Also ensure you have enabled the `flakes` and `nix-command` extra features in your Nix install.

To build the project, run `nix build`.

To run the project, run `nix run` and navigate to `localhost:3000`.

## Updating Dependencies

Dependencies are managed using the `bun.lock` and `bun.nix` files.  Running `bun install` will automatically update
the `bun.nix` file as well.

