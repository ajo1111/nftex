import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-purple-600/20 bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold">
              NFT Marketplace
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              A modern NFT marketplace where users can browse, buy, sell, and
              trade digital collectibles with a seamless user experience.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Marketplace</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/explore"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/rankings"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Rankings
                </Link>
              </li>
              <li>
                <Link
                  href="/activity"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Activity
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/profile"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/favorites"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Favorites
                </Link>
              </li>
              <li>
                <Link
                  href="/watchlist"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Watchlist
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/help"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/platform-status"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Platform Status
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NFT Marketplace. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
