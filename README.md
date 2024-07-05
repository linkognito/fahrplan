# Fahrplan

A simple timetable to display the next departures of up to 4 stops in Dresden's DVB network. Tested with a 1920x1080 monitor.

## Requirements

- Copy the `stops.example.json` in the `src` directory to `stops.json`
- Find your stop IDs via `yarn run find-stops [Stop name]`
- Edit the `stops.json` respectively

## How to run

Install the packages
```bash
$ yarn install
```

Run the project in dev mode
```bash
$ yarn run dev
```

Build it for use in """production"""
```bash
$ yarn run build
```

## Technology

Using [dvbjs](https://github.com/offenesdresden/dvbjs) by [offenesdresden](https://offenesdresden.de/)

Built with [Svelte](https://svelte.dev/).

## Personal Motivation

I wanted to try Svelte for once _and_ had the need for a departures display in my appartement.
