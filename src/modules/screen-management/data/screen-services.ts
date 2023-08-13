import { getAuthenticatedApiClient } from "@/core/utils/authentic-client"
import { createUrl } from "@/core/utils/helpers"
import { screenEndpoints } from "@/modules/screen-management/data/screen-endpoints"
import { Screen } from "@/modules/screen-management/domain/types"

import { DataResponse } from "@/components/data-table/data-response"

export const fetchAllScreensService = async (): Promise<
  DataResponse<Screen>
> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": "efc830e6-2030-4057-bd10-6e715ae1352c",
  })

  const url = createUrl(screenEndpoints.getScreens)

  const response = await apiClient.get(url)

  if (response.status !== 200) throw Error("Something went wrong!")

  const screens = response.data as Screen[]

  return {
    total: screens.length,
    total_page: 1,
    results: screens,
  }
}
