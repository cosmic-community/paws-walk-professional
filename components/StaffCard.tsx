// Staff card component
import type { StaffMember } from '@/types'

interface StaffCardProps {
  member: StaffMember
}

export default function StaffCard({ member }: StaffCardProps) {
  const imageUrl = member.metadata?.photo?.imgix_url

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {imageUrl && (
        <div className="relative h-64 overflow-hidden">
          <img
            src={`${imageUrl}?w=600&h=800&fit=crop&auto=format,compress`}
            alt={member.metadata.full_name}
            className="w-full h-full object-cover"
            width={600}
            height={800}
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {member.metadata.full_name}
        </h3>
        
        <div className="text-sm text-primary font-semibold mb-3">
          {member.metadata.years_experience} years of experience
        </div>

        <p className="text-gray-600 mb-4">
          {member.metadata.bio}
        </p>

        {member.metadata.specialties && (
          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
            <p className="text-gray-600 text-sm">
              {member.metadata.specialties}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}