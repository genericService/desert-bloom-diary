"use client";

import React, { useState } from "react";
import { Heart, MessageCircle, Send, CheckCircle2 } from "lucide-react";

interface Comment {
  id: string;
  name: string;
  date: string;
  message: string;
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: "c1",
    name: "Elena S. (Chandler, AZ)",
    date: "2 days ago",
    message:
      "Sending so much love from down the road in Chandler! The 109 degree heat wave was brutal this past August, so glad you had iced ginger tea on the patio.",
  },
  {
    id: "c2",
    name: "Marcus & Rachel",
    date: "1 week ago",
    message:
      "We had our care at MomDoc Tempe on Priest Dr as well for our little one in 2024! Their staff is amazing. Wishing you, Alex, and baby Mateo all the best!",
  },
];

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      const newComment: Comment = {
        id: Date.now().toString(),
        name: name.trim(),
        date: "Just now",
        message: message.trim(),
      };
      setComments([newComment, ...comments]);
      setName("");
      setMessage("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="bg-white dark:bg-stone-800 rounded-3xl p-6 sm:p-8 border border-rose-100 dark:border-stone-700/80 shadow-md space-y-6">
      <div className="flex items-center justify-between border-b border-rose-100 dark:border-stone-700/60 pb-4">
        <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100">
          <MessageCircle className="w-5 h-5 text-rose-500" />
          <h3 className="font-serif font-bold text-xl">
            Leave a Note for Maya ({comments.length})
          </h3>
        </div>
        <span className="text-xs text-stone-400 font-light italic">
          Reader Community
        </span>
      </div>

      {/* Comment Submission Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {submitted && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-800 text-xs font-medium flex items-center gap-2 border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Your note has been posted to Maya’s journal!</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1">
              Your Name / Location
            </label>
            <input
              type="text"
              placeholder="e.g. Sarah M. (Tempe, AZ)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-sand-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 text-xs border border-rose-100 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-terracotta-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1">
            Your Message / Note
          </label>
          <textarea
            rows={3}
            placeholder="Write a warm note or share your pregnancy experience..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-3.5 py-2.5 rounded-xl bg-sand-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 text-xs border border-rose-100 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-terracotta-400"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-xs shadow-xs transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Post Note to Maya</span>
        </button>
      </form>

      {/* Published Comments Feed */}
      <div className="pt-4 space-y-4 border-t border-rose-100 dark:border-stone-700/60">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 rounded-2xl bg-sand-50/80 dark:bg-stone-900/60 border border-rose-100/60 dark:border-stone-700/60 space-y-1.5 text-xs"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-stone-900 dark:text-stone-100 text-sm flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" />
                {comment.name}
              </span>
              <span className="text-[10px] text-stone-400 font-light">
                {comment.date}
              </span>
            </div>
            <p className="text-stone-700 dark:text-stone-300 font-light leading-relaxed">
              {comment.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
