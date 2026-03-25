FROM archlinux:latest

# Update system and install packages
RUN pacman -Syu --noconfirm && \
    pacman -S base-devel --noconfirm && \
    pacman -Sc --noconfirm

# Optional: Set a command to run when the container starts
CMD ["bash"]