import Link from "next/link";
import { type FC } from "react";
import { Container } from "./Container";

type Props = {};

export const Footer: FC<Props> = ({}) => {
  return (
    <footer>
      <Container>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-lg lg:pr-8">
              anibalsantos
            </Link>
            <p className="mt-2 text-sm">film captures / miscellaneous</p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs uppercase">Mapa</h3>
                <ul role="list" className="mt-4 space-y-4"></ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-xs font-semibold tracking-wider uppercase">
                  Social
                </h3>
                <ul role="list" className="mt-4 space-y-4"></ul>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-12 mt-12 sm:px-6 lg:px-20">
          <p className="mt-2 text-sm text-center w-full">
            Copyright © 2013 - {new Date().getFullYear()}. Anibal Santos. Todos
            los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};
