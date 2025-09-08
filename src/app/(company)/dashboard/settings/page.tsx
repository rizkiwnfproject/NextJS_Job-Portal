import React, { FC } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewForm from "@/components/forms/OverviewForm";
import SocialMediaForm from "@/components/forms/SocialMediaForm";
import TeamForm from "@/components/forms/TeamForm";
import { getServerSession } from "next-auth";
import prisma from "../../../../../lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface SettingsProps {}

async function getDetailCompany() {
  const session = await getServerSession(authOptions);

  const company = await prisma.company.findFirst({
    where: { id: session?.user.id },
    include: {
      CompanyOverview: true,
      CompanySocialMedia: true,
      CompanyTeam: true,
    },
  });

  return company;
}

const SettingsPage: FC<SettingsProps> = async () => {
  const company = await getDetailCompany();

  return (
    <>
      <div>
        <div className="text-3xl font-semibold mb-5">Settings</div>
        <Tabs defaultValue="overview">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
            <TabsTrigger value="teams">Teams</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <OverviewForm detail={company?.CompanyOverview[0]} />
          </TabsContent>
          <TabsContent value="socialLinks">
            <SocialMediaForm detail={company?.CompanySocialMedia[0]} />
          </TabsContent>
          <TabsContent value="teams">
            <TeamForm detail={company?.CompanyTeam} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default SettingsPage;
