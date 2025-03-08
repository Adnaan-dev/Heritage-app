import PageTitle from '@/components/PageTitle'
import { EventType } from '@/interfaces/events'
import EventModel from '@/models/event-model'
import { Link } from '@nextui-org/react'
import React from 'react'
import EventsTable from './_components/events-table'
import { connectDB } from '@/config/dbConfig'
connectDB()

async function EventsPage() {
    const events: EventType[] = (await EventModel.find().sort({
        created: -1 
    })) as any;
    return (
        <div>
            <div className="flex justify-between">
                <PageTitle title="Museum" />
                <Link href="/admin/events/new-event"
                    className="bg-primary text-white px-5 py-2 rounded-sm text-sm"
                >Add Museum</Link>
            </div>

            <EventsTable events={JSON.parse(JSON.stringify(events))} />
        </div>
    );
}

export default EventsPage;