{ pkgs ? import <nixpkgs> {}}:
let
  unsafe-chrome = pkgs.writeShellApplication {
    name = "unsafe-chrome";
    runtimeInputs = [ pkgs.google-chrome ];
    text = ''
      google-chrome-stable --disable-web-security --user-data-dir=~/chrome-user-data-dir
    '';
  };
in
  pkgs.mkShell {
    buildInputs = with pkgs; [ nodejs unsafe-chrome ];
  }
