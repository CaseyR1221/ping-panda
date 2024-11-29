import { db } from "@/db"
import { notFound } from "next/navigation"
import { currentUser } from "@clerk/nextjs/server"
import DashPage from "@/components/DashPage"
import CategoryPageContent from "@/app/dashboard/category/CategoryPageContent"

interface SingleCategoryPageProps {
  params: {
    name: string | string[] | undefined
  }
}

const SingleCategoryPage = async ({ params }: SingleCategoryPageProps) => {
  if (typeof params.name !== "string") {
    return notFound()
  }

  const auth = await currentUser()

  if (!auth) {
    return notFound()
  }

  const user = await db.user.findUnique({
    where: {
      externalId: auth.id,
    },
  })

  if (!user) {
    return notFound()
  }

  const category = await db.eventCategory.findUnique({
    where: {
      name_userId: {
        name: params.name,
        userId: user.id,
      },
    },
    include: {
      _count: {
        select: { events: true },
      },
    },
  })

  if (!category) {
    return notFound()
  }

  const hasEvents = category._count.events > 0

  return (
    <DashPage title={`${category.emoji} ${category.name} events`}>
      <CategoryPageContent hasEvents={hasEvents} category={category} />
    </DashPage>
  )
}

export default SingleCategoryPage
