import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "auth-with-logo-only" | "auth" | "betterment-advisor" | "betterment-work" | "dashboard" | "default" | "profile"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}