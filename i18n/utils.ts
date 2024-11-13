import i18nConfig from "@/i18n.config";
// Importing only types to optimize bundle size (See https://madelinemiller.dev/blog/reduce-webapp-bundle-size/#type-modifier-on-imports-and-exports)
import type common from "@/i18n/locales/en/common.json";
import type home from "@/i18n/locales/en/home.json";
import type auth from "@/i18n/locales/en/auth.json";

// Stubs for namespaces type inference
const namespaces = {
  common: {} as typeof common,
  auth: {} as typeof auth,
  home: {} as typeof home,
} as const;

export const getLocales = () =>
  ObjectFromEntries(
    i18nConfig.locales.map((locale) => [
      locale,
      async () => ({
        // Mimic ts file import
        default: ObjectFromEntries(
          ObjectKeys(namespaces).map((ns) => {
            return [
              ns,
              // eslint-disable-next-line @typescript-eslint/no-require-imports
              require(
                `./locales/${locale}/${ns}.json`,
              ) as (typeof namespaces)[typeof ns],
            ];
          }),
        ),
      }),
    ]),
  );

// Typesafe Object.FromEntries. See https://stackoverflow.com/a/76176570/12310771
const ObjectFromEntries = <
  const T extends ReadonlyArray<readonly [PropertyKey, unknown]>,
>(
  entries: T,
): { [K in T[number] as K[0]]: K[1] } => {
  return Object.fromEntries(entries) as { [K in T[number] as K[0]]: K[1] };
};

// Typesafe Object.keys. See https://www.charpeni.com/blog/properly-type-object-keys-and-object-entries
function ObjectKeys<T extends object>(o: T): (keyof T)[] {
  return Object.keys(o) as (keyof T)[];
}
