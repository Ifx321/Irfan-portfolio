{ pkgs }: {
    deps = [
      pkgs.zip
        pkgs.unixtools.netstat
        pkgs.deno
    ];
}