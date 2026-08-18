---
pattern: verify shared-filesystem assumptions with a cheap round-trip test before debugging package installs across multiple user turns; suggest direct chat-paste as the first option for cloud-sync drives WSL2 can't automount
date: 2026-08-17
source: rrr: portfolio-website
concepts: [sandboxing, wsl2, environment-isolation, browser-automation, file-transfer]
---

# Don't debug package installs across multiple rounds before testing the shared-filesystem assumption

A sandboxed Bash tool can look identical to a user's real terminal — same
hostname, same `/dev/sdb` disk mount, same UID — and still not share
filesystem state. When a user runs `sudo apt-get install X` in their own
terminal and `dpkg -s X` still shows "not installed" from the tool's side,
that's a signal to test the isolation hypothesis immediately (e.g. have the
user create a marker file, check for it from the tool side), not to ask for
another install attempt. In this session it took four round-trips of sudo
commands (nvm PATH fix, then an unrelated `byobu`/`tmux` broken-dependency
detour) before the isolation was confirmed — all of it avoidable with one
cheap test after the first mismatch.

Separately: Google Drive's virtual `G:` drive (and similar OneDrive/Dropbox
drive letters) is not reachable through WSL2's `/mnt` automount even when
real disk partitions (`C:`, `D:`) are mounted fine. When a user references a
file on one of these, suggest pasting it directly into chat as the *first*
option, not after searching real drives for a copy that was never made.

See [[stitch-redesign-deploy-domain]] retrospective for the full incident.
