import LatestJobs from "@/components/organisms/LatestJobs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Factory,
  Flame,
  Instagram,
  Linkedin,
  MapPin,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface DetailCompanyProps {}

const DetailCompanyPage: FC<DetailCompanyProps> = () => {
  return (
    <>
      <div>
        <div className="bg-slate-100 px-32 py-16 pb-14">
          <div className=" inline-flex gap-3 text-sm text-muted-foreground">
            <Link className="hover:underline hover:text-black" href={"/"}>
              Home
            </Link>{" "}
            /{" "}
            <Link
              className="hover:underline hover:text-black"
              href={"/find-companies"}
            >
              Companies
            </Link>{" "}
            /{" "}
            <Link className="text-black" href={""}>
              Twitter
            </Link>
          </div>
          <div>
            <div className="mt-10 inline-flex gap-6 items-start">
              <Image
                src={"/images/company2.png"}
                alt="/images/company2.png"
                width={150}
                height={150}
              />
              <div>
                <div className="inline-flex gap-4 items-center">
                  <span className="text-4xl font-semibold">Twitter</span>
                  <Badge>10 Jobs</Badge>
                </div>
                <div className="mt-2">
                  <Link href={""} className="font-semibold text-primary">
                    https://vercel.com/
                  </Link>
                </div>
                <div className="inline-flex items-center gap-10 mt-6">
                  <div className="inline-flex items-center gap-3">
                    <div>
                      <div className="bg-white p-3 rounded-full">
                        <Flame className=" text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Founded</div>
                      <div className="font-semibold">6 Maret 2025</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <div>
                      <div className="bg-white p-3 rounded-full">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Employees</div>
                      <div className="font-semibold">151-250</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <div>
                      <div className="bg-white p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Location</div>
                      <div className="font-semibold">Indonesia</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <div>
                      <div className="bg-white p-3 rounded-full">
                        <Factory className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Industry</div>
                      <div className="font-semibold">Advertising</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-32 py-16 flex flex-row items-start gap-10">
          <div className="w-3/4">
            <div className="space-y-4 mb-16">
              <div className="text-3xl font-semibold">Company Profile</div>
              <div className="text-muted-foreground">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  ipsam iusto provident, molestias animi culpa ratione ea
                  explicabo ducimus quae itaque suscipit, distinctio, illum
                  commodi eius ad velit? Provident, animi?Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Ducimus iure laudantium
                  amet odit exercitationem officia dolorem eius expedita neque,
                  voluptate recusandae tenetur nam omnis, asperiores, suscipit
                  mollitia quos esse aut!
                </p>
              </div>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-4">Contact</div>
              <div className="flex items-center gap-5 w-[400px] flex-wrap">
                <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold">
                  <Facebook />
                  <span className="text-sm pt-1">https://vercel.com/</span>
                </div>
                <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold">
                  <Twitter />
                  <span className="text-sm pt-1">https://vercel.com/</span>
                </div>
                <div className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold">
                  <Linkedin />
                  <span className="text-sm pt-1">https://vercel.com/</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="text-3xl font-semibold mb-4">Tech Stack</div>
            <div className="text-gray-500 text-sm">
              Learn about the technology and tools that Pattern uses.
            </div>
            <div className="mt-5 inline-flex flex-wrap gap-4">
              {[0, 1, 2, 3].map((item: number) => (
                <Badge>Javascript</Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="px-32">
          <Separator />
          <div className="my-16">
            <div className="text-3xl font-semibold mb-4">Teams</div>
            <div className="grid grid-cols-5 gap-5">
              {[0, 1, 2, 3].map((i: number) => (
                <div key={i} className="border border-border px-3 py-5">
                  <div className="w-16 h-16 rounded-full mx-auto bg-gray-300" />
                  <div className="text-center my-4">
                    <div className="font-semibold text-sm">Hariyanto</div>
                    <div className="text-gray-500 text-xs">
                      CEO & CO-Founder
                    </div>
                  </div>
                  <div className="mx-auto w-max">
                    <div className="inline-flex gap-2">
                      <Instagram className="w-4 h-4 text-gray-500" />
                      <Linkedin className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Separator/>
        </div>
      </div>
      <div className="px-32">
        <LatestJobs />
      </div>
    </>
  );
};

export default DetailCompanyPage;
