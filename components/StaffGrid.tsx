// Staff grid component
import type { StaffMember } from '@/types'
import StaffCard from './StaffCard'

interface StaffGridProps {
  staff: StaffMember[]
}

export default function StaffGrid({ staff }: StaffGridProps) {
  if (!staff || staff.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No staff members available at this time.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {staff.map((member) => (
        <StaffCard key={member.id} member={member} />
      ))}
    </div>
  )
}