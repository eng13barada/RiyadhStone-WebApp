# Website Integration Contract

This document defines the interface between RiyadhStone® Website and E-Factory.

## Isolation Guarantee

- **Direction**: One-way (Website -> E-Factory).
- **Methods**: `GET` only.
- **Modification**: The website never modifies E-Factory data or code.
- **Authentication**: Public endpoints only (no secrets required for demo).

## Endpoints (Read-Only)

- `/public/production-summary`
- `/public/quality-summary`
- `/public/delivery-summary`
- `/public/library-index`
- `/public/downloads-index`

## Fallback Logic

If E-Factory is unreachable or returns an error, the website immediately falls back to `src/site/data/mockData.ts`.
A visual badge "Demo Data" is displayed when mock data is used.

## Schemas

See `src/site/data/schemas.ts` for expected JSON structures.
