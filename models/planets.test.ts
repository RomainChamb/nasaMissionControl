/**
 * Deno includes :
 * 
 * 1. The test run CLI.
 * 2. Assertions in the standard library.
 * 3. Build-in test fixtures with Deno.test().
 */

 import { assertEquals } from "../test_deps.ts";

 import { filterHabitablePlanets } from "./planets.ts";

 const HABITABLE_PLANET = {
     koi_disposition: "CONFIRMED",
     koi_prad: "1",
     koi_srad: "1",
     koi_smass: "1",
 }

 const NOT_CONFIRMED = {
    koi_disposition: "FALSE POSITIVE",
}

const TOO_LARGE_PLANETARY_RADIUS = {
    koi_disposition: "CONFIRMED",
    koi_prad: "1.5",
}

const TOO_SMALL_PLANETARY_RADIUS = {
    koi_disposition: "CONFIRMED",
    koi_prad: "0.5",
}

const TOO_LARGE_SOLAR_RADIUS = {
    koi_disposition: "CONFIRMED",
    koi_prad: "1",
    koi_srad: "1.01",
}

const TOO_SMALL_SOLAR_RADIUS = {
    koi_disposition: "CONFIRMED",
    koi_prad: "1",
    koi_srad: "0.99",
}

const TOO_LARGE_SOLAR_MASS = {
    koi_disposition: "CONFIRMED",
    koi_prad: "1",
    koi_srad: "1",
    koi_smass: "1.04",
}

const TOO_SMALL_SOLAR_MASS = {
    koi_disposition: "CONFIRMED",
    koi_prad: "1",
    koi_srad: "1",
    koi_smass: "0.78",
}

 Deno.test("filter only habitables planets", () => {
    const filtered = filterHabitablePlanets([
        HABITABLE_PLANET,
        NOT_CONFIRMED,
        TOO_LARGE_PLANETARY_RADIUS,
        TOO_SMALL_PLANETARY_RADIUS,
        TOO_LARGE_SOLAR_RADIUS,
        TOO_SMALL_SOLAR_RADIUS,
        TOO_LARGE_SOLAR_MASS,
        TOO_SMALL_SOLAR_MASS
    ]);
     assertEquals(filtered, [
        HABITABLE_PLANET,
     ]);
 });