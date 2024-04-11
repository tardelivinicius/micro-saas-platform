import {
    DashboardPage,
    DashboardPageHeader,
    DashboardPageHeaderNav,
    DashboardPageHeaderTitle,
    DashboardPageMain,
  } from '@/components/dashboard/page'
  import { Button } from '@/components/ui/button'
  import { PlusIcon } from '@radix-ui/react-icons'
  
  export default async function Page() {
  
    return (
      <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
          <DashboardPageHeaderNav>
            <DashboardPageHeaderNav>
              teste
            </DashboardPageHeaderNav>
          </DashboardPageHeaderNav>
        </DashboardPageHeader>
        <DashboardPageMain>
          {/* <TodoDataTable data={todos} /> */}
          teste
        </DashboardPageMain>
      </DashboardPage>
    )
  }