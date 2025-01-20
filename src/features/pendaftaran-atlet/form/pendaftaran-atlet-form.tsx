"use client";
import { getAllSchoolRoleQueryOptions } from "@/features/school/action/get-all-school-roles/query-options";
import { getSchoolByCityIdQueryOptions } from "@/features/school/action/get-school-by-city-id/query-options";
import { GetUserByIdResponse } from "@/features/user/actions/get-user-by-id";
import { Button, Group, Radio, Select } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

export function PendaftaranAtletForm({
  userData,
}: {
  userData: GetUserByIdResponse;
}) {
  const allSchoolRoles = useQuery(getAllSchoolRoleQueryOptions());

  const schoolRoleRadioOptions = allSchoolRoles.data
    ?.filter((schoolRole) => schoolRole.name !== "Head Coach")
    .map((schoolRole) => ({
      value: schoolRole.id,
      label: schoolRole.name,
    }));

  const [selectedSchoolRole, setSelectedSchoolRole] = useState<string | null>(
    null,
  );

  const schoolByUserCityId = useQuery(
    getSchoolByCityIdQueryOptions(userData.domisiliKota),
  );

  const schoolSelectOptions = schoolByUserCityId.data?.map((school) => ({
    value: school.id.toString(),
    label: school.name,
  }));

  return (
    <form>
      <div className="space-y-4">
        <Radio.Group
          withAsterisk
          error={allSchoolRoles.isError}
          label="Pilih Peran di SSB"
          mb={4}
        >
          <Group>
            {schoolRoleRadioOptions?.map((option) => (
              <Radio
                checked={selectedSchoolRole === option.value.toString()}
                key={option.value}
                value={option.value.toString()}
                label={option.label}
                onChange={(event) =>
                  setSelectedSchoolRole(event.currentTarget.value)
                }
              />
            ))}
          </Group>
        </Radio.Group>

        {/* Choose SSB Based on user domisiliKota */}
        {selectedSchoolRole &&
          (schoolSelectOptions && schoolSelectOptions.length > 0 ? (
            <Select
              label="Pilih SSB"
              placeholder="Pilih SSB"
              data={schoolSelectOptions}
              error={schoolByUserCityId.isError}
              required
              searchable
            />
          ) : (
            <div className="text-red-500">
              Belum ada SSB di kota Anda. Silahkan ubah kota domisili Anda atau
              hubungi pihak SSB.
            </div>
          ))}

        {/* Button to add SSB as a Head Coach */}
        {selectedSchoolRole === "2" && ( // 2 is Coach
          <div className="flex items-center gap-2">
            Tidak ada SSB yang dituju?{" "}
            <Button
              color={"#E5BB25"}
              component={Link}
              href={"/dashboard/pendaftaran-ssb"}
            >
              Daftarkan SSB
            </Button>
          </div>
        )}
      </div>
    </form>
  );
}
