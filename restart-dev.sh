#!/bin/bash
echo "Clearing Next.js cache..."
rm -rf .next
echo "Installing dependencies..."
pnpm install
echo "Starting development server..."
pnpm dev
